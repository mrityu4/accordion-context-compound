import React, { useState } from "react";

import {
  AccordionContext,
  AccordionItemContext,
  useAccordion,
  useAccordionItem,
} from "./AccordionContext";

const Accordian = ({
  defaultActive = "",
  children,
  collapsible = false,
  ...props
}: {
  children: React.ReactNode;
  defaultActive?: string;
  collapsible: boolean;
}) => {
  const [activePanel, setActivePanel] = useState(defaultActive);
  const handlePanelClick = (id: string) => {
    let nextActiveId = id;

    if (collapsible && nextActiveId === activePanel) nextActiveId = "";

    setActivePanel(nextActiveId);
  };
  const value = {
    activePanel,
    handlePanelClick,
    collapsible,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};
type AccordionItemType = {
  id: string;
  children: React.ReactNode;
};
export const AccordionItem: React.FC<AccordionItemType> = ({
  id,
  children,
  ...props
}) => {
  const value = {
    id,
  };

  return (
    <AccordionItemContext.Provider value={value}>
      <div {...props}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

type AccordionToggleType = { children: React.ReactNode };
export const AccordionToggle: React.FC<AccordionToggleType> = ({
  children,
  ...props
}) => {
  const { handlePanelClick } = useAccordion();
  const { id } = useAccordionItem();

  return (
    <button
      style={{
        width: "100%",
        height: "30px",
        border: "1px solid #ebebeb",
        textAlign: "left",
        padding: "0px 20px",
      }}
      onClick={() => handlePanelClick(id)}
      {...props}
    >
      {children}
    </button>
  );
};
type AccordionPanelType = { children: React.ReactNode };
export const AccordionPanel: React.FC<AccordionPanelType> = ({
  children,
  ...props
}) => {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  return activePanel === id ? (
    <div
      style={{
        border: "1px solid #ebebeb",
        textAlign: "left",
        padding: "20px",
      }}
      {...props}
    >
      {children}
    </div>
  ) : null;
};

export default Accordian;

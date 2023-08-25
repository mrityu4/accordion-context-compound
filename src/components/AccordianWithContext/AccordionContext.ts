import React, { useContext } from "react";
type AccordionContextType = {
  activePanel?: string;
  handlePanelClick: (id: string) => void;
  collapsible: boolean;
};
type AccordionItemContextType = {
  id: string;
};
export const AccordionContext = React.createContext<
  AccordionContextType | undefined
>(undefined);

export const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordion must be used within a <Accordion />");
  }
  return context;
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (context === undefined) {
    throw new Error("useAccordion must be used within a <Accordion />");
  }
  return context;
}

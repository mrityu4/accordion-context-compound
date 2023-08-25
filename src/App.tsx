import "./App.css";
import AccordionWithContext, {
  AccordionItem,
  AccordionPanel,
  AccordionToggle,
} from "./components/AccordianWithContext/AccordionWithContext";

function App() {
  return (
    <AccordionWithContext collapsible>
      <AccordionItem id="1">
        <AccordionToggle>What is React Context?</AccordionToggle>
        <AccordionPanel>
          React Context provides a way to pass data through the component tree
          without having to pass props down manually at every level. It's
          particularly useful for data that needs to be accessible by many
          components at different nesting levels.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="2">
        <AccordionToggle>How to Create a Context</AccordionToggle>
        <AccordionPanel>
          Creating a context in React is straightforward. Use
          React.createContext to initialize a context object. The object will
          have a Provider and a Consumer component that you can use to share
          values. Panel
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem id="3">
        <AccordionToggle>Best Practices for Using Context</AccordionToggle>
        <AccordionPanel>
          While context is powerful, it's not advisable to use it too liberally.
          It's best used for data that is "global" for a part of your
          application, rather than passing down all props
        </AccordionPanel>
      </AccordionItem>
    </AccordionWithContext>
  );
}
export default App;

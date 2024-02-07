import { useState } from "react";
import propTypes from "prop-types";

const Accordion = (props) => {
  const [accordionState, setAccordionState] = useState(false);
  const HandleAccordionState = () => {
    setAccordionState(!accordionState);
  };
  return (
    <div className="py-3 px-6 text-black">
      <div
        className="bg-clr-normal py-4 px-5 rounded-t flex justify-between items-center cursor-pointer hover:bg-[#90a9b9]"
        onClick={HandleAccordionState}
      >
        <h3 className="text-lg font-medium">{props.heading}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className={accordionState ? "" : "-rotate-90"}
        >
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
          ></path>
        </svg>
      </div>
      <div
        className={
          "bg-clr-exlight py-4 px-7 " + (accordionState ? " block" : " hidden")
        }
      >
        <p className="">{props.children ? props.children : props.desc}</p>
      </div>
    </div>
  );
};
Accordion.propTypes = {
  heading: propTypes.string,
  desc: propTypes.string,
  children: propTypes.string,
};

export default Accordion;

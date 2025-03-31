import React, { useState } from "react";

const Panel = ({ title, answer }) => {
  const [AccordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!AccordionOpen)}
        className="flex justify-between w-full"
      >
        {AccordionOpen ? <span>-</span> : <span>+</span>}
        <span>{title}</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
      
      ${
        AccordionOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Panel;

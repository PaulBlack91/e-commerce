import React, { useState } from "react";

const Panel = ({ title, answer }) => {
  const [AccordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" border-gray-300 w-full">

      <button
        onClick={() => setAccordionOpen(!AccordionOpen)}
        className="flex justify-normal items-center w-full p-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all"
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
         <div className="overflow-hidden p-4 text-gray-700 bg-white border-t border-gray-200">{answer}</div>
      </div>
    </div>
  );
};

export default Panel;

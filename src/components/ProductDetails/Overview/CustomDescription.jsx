import React from "react";
import parse, { domToReact } from "html-react-parser";
import { CircleCheck } from "lucide-react";

const CustomDescription = ({ html }) => {
    if (!html || typeof html !== "string") return null; 
  const options = {
    replace: (domNode) => {
      if (domNode.name === "h3") {
        return (
          <h6 className="text-[#474545] text-[18px] lg:text-[24px] font-medium">
            {domToReact(domNode.children)}
          </h6>
        );
      }
      if (domNode.name === "p") {
        return (
          <p className="leading-[30px] text-sm lg:text-[16px] py-[10px] lg:py-[15px] text-[#474545]">
            {domToReact(domNode.children)}
          </p>
        );
      }
      if (domNode.name === "ul") {
        return (
          <ul className="py-[20px] lg:py-[25px] text-[#474545] text-sm lg:text-[16px] leading-[28px] space-y-2 lg:space-y-4">
            {domToReact(domNode.children)}
          </ul>
        );
      }
      if (domNode.name === "li") {
        return (
          <li className="flex items-center gap-1">
            <span className="text-[#10CA2E]">
              <CircleCheck height={18} />
            </span>{" "}
            {domToReact(domNode.children)}
          </li>
        );
      }
      if (domNode.name === "a") {
        return (
          <a
            href={domNode.attribs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F39022] underline"
          >
            {domToReact(domNode.children)}
          </a>
        );
      }
    },
  };

  return <div className="border-t border-[#00000014] p-[20px] lg:p-[30px]">{parse(html, options)}</div>;
};

export default CustomDescription
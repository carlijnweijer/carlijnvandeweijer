import React from "react";
import HoverTooltip from "./tooltip";

type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
  tooltiptext: string;
};

const Experience = ({
  title,
  company,
  date,
  description,
  tooltiptext,
}: Props) => {
  return (
    <article className="grid grid-cols-2 gap-3 border-b-3 pb-4 border-zinc-100 mt-4">
      <div className="">
        <p className="font-semibold text-md">{company}</p>
        <p className="text-zinc-400 text-xs">{date}</p>
      </div>
      <div>
        <h3>{title}</h3>
        <HoverTooltip tooltiptext={tooltiptext}>
          <p className="text-sm text-zinc-400">{description}</p>
        </HoverTooltip>
      </div>
    </article>
  );
};

export default Experience;

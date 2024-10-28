import React from "react";
import { education } from "app/resume";
import HoverTooltip from "./tooltip";

type Props = {
  date: string;
  school: string;
  degree: string;
};

const Education = ({ date, school, degree }: Props) => {
  return (
    <article className="mb-8">
      <div>
        <h3 className="text-xs text-zinc-400">{date}</h3>
        <p className="text-md font-semibold">{degree}</p>
        <p className="text-xs text-zinc-400">{school}</p>
      </div>
    </article>
  );
};

export default Education;

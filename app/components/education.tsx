import React from "react";
import { education } from "app/resume";

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
        <p className="text-md font-semibold">{school}</p>
        <p className="text-xs text-zinc-400">{degree}</p>
      </div>
    </article>
  );
};

export default Education;

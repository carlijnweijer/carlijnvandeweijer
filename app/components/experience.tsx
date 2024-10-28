import React from "react";

type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const Experience = ({ title, company, date, description }: Props) => {
  return (
    <article className="grid grid-cols-2 gap-3">
      <div className="">
        <p>{company}</p>
        <p>{date}</p>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Experience;

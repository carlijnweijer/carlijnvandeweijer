import React from "react";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import Email from "./icons/email";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-8 items-end border-b-3 pb-4 border-zinc-100">
      <h1 className="text-4xl tracking-tighter font-semibold pr-10">
        carlijn van de weijer
      </h1>
      <p className="text-md font-semibold">Frontend Developer</p>

      <div className="flex flex-col list-none text-sm">
        <div className="flex flex-col gap-1">
          <li className="flex items-center gap-1">
            <Github height={16} />
            carlijnweijer
          </li>
          <li className="flex items-center gap-1">
            <Email height={16} />
            carlijnweijer@gmail.com
          </li>
          <li className="flex items-center gap-1">
            <LinkedIn height={16} />
            carlijnvdweijer
          </li>
        </div>
      </div>
    </div>
  );
};

export default Hero;

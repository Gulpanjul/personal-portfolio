import Image from "next/image";
import React from "react";
import { SimpleIcon } from "simple-icons";

interface PropTypes {
  icon: SimpleIcon;
  title: string;
}

const TechList = ({ icon, title }: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
        style={{ fill: "currentColor" }}
      />
      <span className="text-xs sm:text-sm md:text-base lg:text-lg text-primary text-center font-medium">{title}</span>
    </div>
  );
};

export default TechList;

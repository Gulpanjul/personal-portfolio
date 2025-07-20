import Image from "next/image";
import React from "react";
import { SimpleIcon } from "simple-icons";

interface PropTypes {
  icon: SimpleIcon;
  title: string;
}

const TechList = ({ icon, title }: PropTypes) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-[50px] h-[50px] text-primary"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
        style={{ fill: "currentColor" }}
      />
      <span className="text-primary font-medium">{title}</span>
    </div>
  );
};

export default TechList;

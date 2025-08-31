import Link from "next/link";
import { ElementType } from "react";

interface PropTypes {
  icon: ElementType;
  link: string;
}

const SocialAbout = (props: PropTypes) => {
  const { icon: Icon, link } = props;
  return (
    <div className="flex flex-col items-center justify-items-center gap-2">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Icon  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary"/>
      </Link>
    </div>
  );
};

export default SocialAbout;

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const sectionVariants = cva("max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8");

type PropTypes = {
  children: React.ReactNode;
};

const Section = (props: PropTypes) => {
  const { children } = props;
  return <section className={cn(sectionVariants())}>{children}</section>;
};

export default Section;

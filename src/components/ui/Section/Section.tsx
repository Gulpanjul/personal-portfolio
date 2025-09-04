import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const sectionVariants = cva(
  "max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 justify-center flex flex-col"
);

type PropTypes = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = (props: PropTypes) => {
  const { children, className, id } = props;
  return (
    <section id={id} className={cn(sectionVariants({ className }))}>
      {children}
    </section>
  );
};

export default Section;

import { cva } from "class-variance-authority";

const paragraphVariants = cva("font-normal", {
  variants: {
    size: {
      large: "text-lg leading-[1.6em] tracking-normal",
      medium: "text-base leading-[1.6em] tracking-widest",
      small: "text-sm leading-[1.6em] tracking-[0.25em]",
    },
    strong: {
      true: "font-semibold",
      false: "font-normal",
    },
  },
  defaultVariants: {
    size: "medium",
    strong: false,
  },
});

interface PropTypes {
  size?: "large" | "medium" | "small";
  strong?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Paragraph = (props: PropTypes) => {
  const { size, strong, children, className } = props;
  return (
    <p className={paragraphVariants({ size, strong, className })}>{children}</p>
  );
};

export default Paragraph;

import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements; // h1, h2, p, etc
  size?:
    | "xLarge"
    | "large"
    | "medium"
    | "small"
    | "xSmall"
    | "xxSmall"
    | "xXXSmall";
  strong?: boolean;
  children: React.ReactNode;
};

const sizeClasses = {
  xLarge: "text-[40px] leading-[52px] tracking-[0.25em]",
  large: "text-[34px] leading-[44px] tracking-[0.25em]",
  medium: "text-[28px] leading-[36px] tracking-[0.25em]",
  small: "text-[24px] leading-[32px] tracking-[0.1em]",
  xSmall: "text-[20px] leading-[28px] tracking-[0.1em]",
  xxSmall: "text-[14px] leading-[16px] tracking-[0.8em]",
  xXXSmall: "text-[12px] leading-[16px] tracking-[0.8em]",
};

const Heading: React.FC<HeadingProps> = ({
  as: Tag = "h2", // default
  size = "medium",
  strong = false,
  children,
}) => {
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        strong && "font-semibold"
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;

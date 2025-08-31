import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("font-sans", {
  variants: {
    size: {
      large: "text-[18px] leading-[24px]",
      medium: "text-[16px] leading-[20px] tracking-[0.1em]",
      small: "text-[14px] leading-[20px] tracking-[0.1em]",
      xSmall: "text-[12px] leading-[16px] tracking-[0.25em]",
    },
    weight: {
      default: "font-normal",
      strong: "font-semibold",
    },
    colorVariant: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
    monospace: {
      true: "font-mono",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "default",
    colorVariant: "primary",
    monospace: false,
  },
});

interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

function Label({
  className,
  size,
  weight,
  colorVariant,
  monospace,
  ...props
}: LabelProps) {
  return (
    <span
      className={cn(
        labelVariants({ size, weight, colorVariant, monospace }),
        className
      )}
      {...props}
    />
  );
}

export default Label;

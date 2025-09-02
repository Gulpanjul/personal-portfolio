import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("font-sans", {
  variants: {
    size: {
      large: "text-[18px] leading-[24px]",
      medium: "text-[16px] leading-[20px] tracking-widest",
      small: "text-[14px] leading-[20px] tracking-widest",
      xSmall: "text-[12px] leading-[16px] tracking-[0.25em]",
    },
    weight: {
      default: "font-normal",
      strong: "font-semibold",
    },
    monospace: {
      true: "font-mono",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "default",
    monospace: false,
  },
});

interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

function Label({ className, size, weight, monospace, ...props }: LabelProps) {
  return (
    <span
      className={cn(labelVariants({ size, weight, monospace }), className)}
      {...props}
    />
  );
}

export default Label;

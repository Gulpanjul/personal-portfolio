import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const headingVariants = cva("", {
  variants: {
    size: {
      xLarge: "text-[40px] leading-[52px] tracking-[0.25em]",
      large: "text-[34px] leading-[44px] tracking-[0.25em]",
      medium: "text-[28px] leading-[36px] tracking-[0.25em]",
      small: "text-[24px] leading-[32px] tracking-widest",
      xSmall: "text-[20px] leading-[28px] tracking-widest",
      xxSmall: "text-[14px] leading-[16px] tracking-[0.8em]",
      xXXSmall: "text-[12px] leading-[16px] tracking-[0.8em]",
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

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ asChild, as: As = "h2", size, strong, className, ...props }, ref) => {
    const Comp = asChild ? Slot : As;

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, strong }), className)}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export default Heading;

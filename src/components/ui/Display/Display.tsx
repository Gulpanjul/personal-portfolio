import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const displayVariants = cva("tracking-tight font-normal", {
  variants: {
    size: {
      lg: "text-[88px] leading-[96px] font-normal",
      md: "text-[72px] leading-[80px] font-normal",
      sm: "text-[56px] leading-[64px] font-normal",
    },
    strong: {
      true: "font-semibold",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface DisplayProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof displayVariants> {
  as?: React.ElementType;
}

const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size, strong, as: Tag = "h1", ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(displayVariants({ size, strong }), className)}
        {...props}
      />
    );
  }
);

Display.displayName = "Display";

export default Display;

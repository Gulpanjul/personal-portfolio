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
    VariantProps<typeof displayVariants> {}

const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size, strong, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(displayVariants({ size, strong }), className)}
        {...props}
      />
    );
  }
);

Display.displayName = "Display";

export default Display;

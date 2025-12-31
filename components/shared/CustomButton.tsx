import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface BrandButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          // Default brand styles for the primary SKU variant (usually primary)
          variant === "default" || !variant
            ? "bg-[#3e54ac] hover:bg-[#334692] text-white px-10 py-6 rounded-xl font-bold shadow-lg shadow-blue-500/10 text-lg transition-all active:scale-[0.98]"
            : "",
          className
        )}
        {...props}
      />
    );
  }
);
BrandButton.displayName = "BrandButton";

export { BrandButton };

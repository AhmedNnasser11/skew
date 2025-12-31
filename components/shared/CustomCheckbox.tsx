import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface BrandCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof Checkbox> {}

const BrandCheckbox = React.forwardRef<
  React.ElementRef<typeof Checkbox>,
  BrandCheckboxProps
>(({ className, ...props }, ref) => {
  return (
    <Checkbox
      ref={ref}
      className={cn(
        "w-5 h-5 border-gray-300 data-[state=checked]:bg-[#3e54ac] data-[state=checked]:border-[#3e54ac]",
        className
      )}
      {...props}
    />
  );
});
BrandCheckbox.displayName = "BrandCheckbox";

export { BrandCheckbox };

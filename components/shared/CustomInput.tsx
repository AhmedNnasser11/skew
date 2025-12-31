import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface RTLInputProps
  extends React.ComponentPropsWithoutRef<typeof Input> {
  icon?: LucideIcon;
}

const RTLInput = React.forwardRef<HTMLInputElement, RTLInputProps>(
  ({ className, icon: Icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
        )}
        <Input
          ref={ref}
          className={cn(
            "py-6 text-right transition-all",
            Icon ? "pr-10" : "pr-4",
            "focus-visible:ring-[#3e54ac] focus-visible:border-[#3e54ac] focus-visible:ring-offset-0",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
RTLInput.displayName = "RTLInput";

export { RTLInput };

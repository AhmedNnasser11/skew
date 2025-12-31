import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface BrandTabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTrigger> {}

const BrandTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsTrigger>,
  BrandTabsTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <TabsTrigger
      ref={ref}
      className={cn(
        "justify-start gap-3 px-4 py-3 data-[state=active]:bg-[#f0f4ff] data-[state=active]:text-[#3e54ac] data-[state=active]:shadow-none rounded-lg text-gray-500 hover:bg-gray-50 transition-colors",
        className
      )}
      {...props}
    />
  );
});
BrandTabsTrigger.displayName = "BrandTabsTrigger";

export { BrandTabsTrigger };

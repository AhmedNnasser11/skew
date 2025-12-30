import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function BrandStep() {
  return (
    <Card className="p-4 md:p-6 mb-6 shadow-sm border-gray-100 rounded-xl relative overflow-hidden">
      {/* Step Number Badge */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3e54ac] text-white font-bold text-sm">
          2
        </span>
        <h2 className="text-lg font-bold text-gray-800">العلامة التجارية</h2>
      </div>

      <div className="mt-12 space-y-4">
        {/* Brand Search */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              className="py-6 pr-10 text-right bg-white border-gray-200 focus-visible:ring-[#3e54ac]"
              placeholder="علامة تجارية معروفة"
            />
          </div>
        </div>

        {/* No Brand Checkbox */}
        <div className="flex items-center gap-2 justify-end">
          <Label
            htmlFor="no-brand"
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            هذا المنتج ليس له علامة تجارية
          </Label>
          <Checkbox
            id="no-brand"
            className="w-5 h-5 border-gray-300 data-[state=checked]:bg-[#3e54ac]"
          />
        </div>
      </div>
    </Card>
  );
}

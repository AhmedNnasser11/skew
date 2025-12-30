import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function IdentityStep() {
  return (
    <Card className="p-4 md:p-6 mb-6 shadow-sm border-gray-100 rounded-xl relative overflow-hidden">
      {/* Step Number Badge */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3e54ac] text-white font-bold text-sm">
          3
        </span>
        <h2 className="text-lg font-bold text-gray-800">الهوية</h2>
      </div>

      <div className="mt-12 space-y-6">
        <div className="space-y-2">
          <Label className="text-gray-600 block text-right">
            رمز التخزين التعريفي للشريك
          </Label>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* Input Area */}
            <Input
              className="py-6 text-right bg-white border-gray-200 focus-visible:ring-[#3e54ac] flex-1"
              placeholder="فئة البحث"
            />
            <span className="text-gray-400 text-sm hidden md:inline">أو</span>
            <span className="text-gray-400 text-sm md:hidden text-center">
              أو
            </span>
            <Button
              variant="secondary"
              className="bg-blue-50 text-[#3e54ac] hover:bg-blue-100 py-6 px-6"
            >
              انشاء SKU للشريك
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

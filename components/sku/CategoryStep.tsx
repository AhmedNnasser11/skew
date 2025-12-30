import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function CategoryStep() {
  return (
    <Card className="p-4 md:p-6 mb-6 shadow-sm border-gray-100 rounded-xl relative overflow-hidden">
      {/* Step Number Badge */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3e54ac] text-white font-bold text-sm">
          1
        </span>
        <h2 className="text-lg font-bold text-gray-800">اختر الفئة</h2>
      </div>

      <div className="mt-12 space-y-6">
        {/* Category Search */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              className="py-6 pr-10 text-right bg-white border-gray-200 focus-visible:ring-[#3e54ac]"
              placeholder="اجهزة المعامل"
            />
          </div>
        </div>

        {/* URL Input */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              className="py-6 pr-10 text-right bg-white border-gray-200 focus-visible:ring-[#3e54ac]"
              placeholder="انسخ و الصق رابط لنكي هنا"
            />
          </div>
          <p className="text-xs text-gray-500 text-right px-1">
            الصق عنوان PDP لـ URL طهرا (من خلال لصق عنوان URL لرمز SKU الخاص
            بلنكي هنا، ستختار نفس فئة هذا المنتج)
          </p>
        </div>
      </div>
    </Card>
  );
}

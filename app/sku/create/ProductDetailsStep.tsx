import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PricingForm } from "./PricingForm";
import { Info, Tag, Box, FileText } from "lucide-react";
import { BrandTabsTrigger } from "@/components/shared/CustomTabs";

export function ProductDetailsStep() {
  return (
    <Card className="p-0 mb-6 shadow-sm border-gray-100 rounded-xl relative overflow-hidden">
      {/* Step Number Badge */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3e54ac] text-white font-bold text-sm">
          4
        </span>
        <h2 className="text-lg font-bold text-gray-800">تفاصيل المنتج</h2>
      </div>

      <Tabs
        defaultValue="pricing"
        dir="rtl"
        className="w-full flex flex-col md:flex-row min-h-[500px]"
      >
        {/* Sidebar Tabs List */}
        <TabsList className="bg-white p-4 pt-20 w-full md:w-64 flex-col items-stretch justify-start h-auto border-l rounded-none gap-2 space-y-1">
          <BrandTabsTrigger value="basic">
            <Info className="w-4 h-4" />
            معلومات اساسية
          </BrandTabsTrigger>
          <BrandTabsTrigger value="pricing">
            <Tag className="w-4 h-4" />
            تسعير المنتج
          </BrandTabsTrigger>
          <BrandTabsTrigger value="inventory">
            <Box className="w-4 h-4" />
            ادارة المخزون
          </BrandTabsTrigger>
          <BrandTabsTrigger value="compliance">
            <FileText className="w-4 h-4" />
            الامتثال و التوثيق
          </BrandTabsTrigger>
        </TabsList>
        {/* ... rest unchanged */}

        {/* Content Area */}
        <div className="flex-1 bg-white p-6 pt-20 relative">
          <TabsContent value="pricing" className="mt-0 h-full">
            <PricingForm />
          </TabsContent>
          <TabsContent
            value="basic"
            className="mt-0 h-full flex items-center justify-center text-gray-400"
          >
            محتوى المعلومات الاساسية
          </TabsContent>
          <TabsContent
            value="inventory"
            className="mt-0 h-full flex items-center justify-center text-gray-400"
          >
            محتوى ادارة المخزون
          </TabsContent>
          <TabsContent
            value="compliance"
            className="mt-0 h-full flex items-center justify-center text-gray-400"
          >
            محتوى الامتثال و التوثيق
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
}

"use client";
import { ChevronDown } from "lucide-react";

import { TopNav } from "@/components/sku/TopNav";
import { StepHeader } from "@/components/sku/StepHeader";
import { CategoryStep } from "@/components/sku/CategoryStep";
import { BrandStep } from "@/components/sku/BrandStep";
import { IdentityStep } from "@/components/sku/IdentityStep";
import { ProductDetailsStep } from "@/components/sku/ProductDetailsStep";

export default function CreateSkuPage() {
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <TopNav />

      {/* Light Blue background section with watermark */}
      <div className="bg-[#f0f5ff] pt-10 pb-24 relative overflow-hidden bg-watermark">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          {/* Welcome & Store Selector Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            {/* Left: Store Selector */}
            <div className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-[#3e54ac] cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <ChevronDown className="w-4 h-4" />
              <span>المتجر الاساسي</span>
            </div>

            {/* Right: Welcome Message */}
            <div className="text-right flex items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2 justify-end mb-1">
                  <span className="text-2xl font-normal text-[#1e293b]">
                    اهلا
                  </span>
                  <h1 className="text-2xl font-black text-[#1e293b]">
                    Mohamed Ahmed
                  </h1>
                </div>
                <p className="text-sm font-medium text-gray-400">
                  mo_nayef123@gmail.com
                </p>
              </div>
            </div>
          </div>

          <StepHeader currentStep={1} />
        </div>
      </div>

      <main className="container mx-auto max-w-7xl p-4 md:p-6 -mt-12 relative z-20 space-y-6 md:space-y-8">
        {/* Render all sections sequentially */}

        <section>
          <CategoryStep />
        </section>

        <section>
          <BrandStep />
        </section>

        <section>
          <IdentityStep />
        </section>

        <section>
          <ProductDetailsStep />
        </section>
      </main>
    </div>
  );
}

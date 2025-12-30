"use client";

import { TopNav } from "@/components/sku/TopNav";
import { StepHeader } from "@/components/sku/StepHeader";
import { CategoryStep } from "@/components/sku/CategoryStep";
import { BrandStep } from "@/components/sku/BrandStep";
import { IdentityStep } from "@/components/sku/IdentityStep";
import { ProductDetailsStep } from "@/components/sku/ProductDetailsStep";

export default function CreateSkuPage() {
  return (
    <div className="min-h-screen bg-gray-50 bg-watermark font-sans" dir="rtl">
      <TopNav />
      {/* We can keep StepHeader if it looks good, or remove it. 
          The user said "all components show", implying a dashboard-like view. 
          If StepHeader is just a progress bar, it might be weird on a single page, 
          but technically it's a "component". Let's keep it for now as a header. */}
      <StepHeader currentStep={4} />

      <main className="container mx-auto max-w-5xl p-4 md:p-6 pb-20 space-y-6 md:space-y-8">
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

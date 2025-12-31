import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandButton } from "@/components/shared/CustomButton";

const steps = [
  { id: 1, label: "القسم" },
  { id: 2, label: "العلامة التجارية" },
  { id: 3, label: "الهوية" },
  { id: 4, label: "تفاصيل المنتج" },
];

interface StepHeaderProps {
  currentStep: number;
}

export function StepHeader({ currentStep }: StepHeaderProps) {
  return (
    <div
      className="bg-white shadow-xl rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-6"
      dir="rtl"
    >
      {/* Right: Title */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-[#1e293b] whitespace-nowrap">
          انشاء SKU للمنتج
        </h2>
      </div>

      {/* Center: Stepper */}
      <div className="flex-1 flex items-center justify-center w-full max-w-4xl">
        <div className="flex items-center w-full justify-between gap-2 px-4">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative",
                      isActive
                        ? "border-[#3e54ac] bg-white ring-4 ring-blue-50"
                        : "border-gray-200 bg-white"
                    )}
                  >
                    {isActive && (
                      <div className="w-4 h-4 bg-[#3e54ac] rounded-full" />
                    )}
                    {isCompleted && (
                      <div className="w-full h-full bg-[#3e54ac] rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm font-bold whitespace-nowrap",
                      isActive ? "text-[#3e54ac]" : "text-gray-500"
                    )}
                  >
                    {step.label}
                  </span>
                </div>

                {/* Connecting Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-100 min-w-[20px] mx-2" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Left: Action Button */}
      <div className="w-full lg:w-auto">
        <BrandButton className="w-full lg:w-auto">حفظ التغييرات</BrandButton>
      </div>
    </div>
  );
}

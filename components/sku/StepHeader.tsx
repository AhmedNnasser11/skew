import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      className="bg-white shadow-sm border-b py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10"
      dir="rtl"
    >
      {/* Right: Title */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
        <h1 className="text-xl font-bold text-gray-800">انشاء SKU للمنتج</h1>
      </div>

      {/* Center: Stepper */}
      <div className="flex-1 w-full md:w-auto flex justify-center">
        <div className="flex items-center w-full max-w-3xl justify-center relative">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 -translate-y-1/2 mx-4 md:mx-10"></div>
          {/* Active Progress Bar - Dynamic calculation based on step */}
          <div
            className="absolute top-1/2 right-0 h-1 bg-slate-600 -z-10 -translate-y-1/2 transition-all duration-300 mx-4 md:mx-10"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></div>

          <div className="flex justify-between w-full px-2">
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center gap-2 bg-white px-1 md:px-2"
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm",
                      isActive
                        ? "border-slate-800 bg-white"
                        : isCompleted
                        ? "border-slate-800 bg-slate-800 text-white"
                        : "border-gray-200 text-gray-400"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span
                        className={cn(
                          "text-xs font-bold",
                          isActive ? "text-slate-800" : ""
                        )}
                      ></span>
                    )}
                    {/* Inner circle for active */}
                    {isActive && (
                      <div className="w-3 h-3 bg-slate-800 rounded-full" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium whitespace-nowrap",
                      isActive || isCompleted
                        ? "text-slate-800"
                        : "text-gray-400"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Left: Actions */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-600 cursor-pointer">
          <span>المتجر الاساسي</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <Button className="bg-[#3e54ac] hover:bg-[#334692] text-white px-6">
          حفظ التغييرات
        </Button>
      </div>
    </div>
  );
}

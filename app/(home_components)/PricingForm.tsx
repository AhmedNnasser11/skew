"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ar } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { BrandButton } from "@/components/shared/CustomButton";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RTLInput } from "@/components/shared/CustomInput";

export function PricingForm() {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#3e54ac]">التسعير الاساسي</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-right block font-bold text-gray-700">
            السعر الاساسي
          </Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1 bg-gray-100 rounded text-xs font-bold text-gray-500 z-10">
              ر.س
            </div>
            <RTLInput
              type="number"
              placeholder="ادخل السعر هنا"
              className="pl-12"
            />
          </div>
          <p className="text-xs text-gray-400 text-right">
            قم بادخال السعر الاساسي قبل اي خصم
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="font-bold text-gray-700">
              سعر العرض{" "}
              <span className="text-gray-400 font-normal text-xs mr-1">
                اختياري
              </span>
            </Label>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1 bg-gray-100 rounded text-xs font-bold text-gray-500 z-10">
              ر.س
            </div>
            <RTLInput
              type="number"
              placeholder="ادخل سعر العرض هنا"
              className="pl-12"
            />
          </div>
          <p className="text-xs text-gray-400 text-right">
            قم بادخال السعر بعد اي خصم
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="font-bold text-gray-700">
              فترة العرض{" "}
              <span className="text-gray-400 font-normal text-xs mr-1">
                اختياري
              </span>
            </Label>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <BrandButton
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-right font-normal py-6 border-gray-200 hover:bg-white bg-white text-gray-500 shadow-none",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="ml-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "PLL", { locale: ar })} -{" "}
                      {format(date.to, "PLL", { locale: ar })}
                    </>
                  ) : (
                    format(date.from, "PLL", { locale: ar })
                  )
                ) : (
                  <span>من تاريخ بدء العرض الي تاريخ انتهاء العرض</span>
                )}
              </BrandButton>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                dir="rtl"
                locale={ar}
              />
            </PopoverContent>
          </Popover>
          <p className="text-xs text-gray-400 text-right">قم بتحديد التاريخ</p>
        </div>
      </div>
    </div>
  );
}

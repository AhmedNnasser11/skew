import {
  Search,
  Bell,
  Mail,
  Headset,
  ChevronDown,
  Menu,
  Link,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { BrandButton } from "@/components/shared/CustomButton";

export function TopNav() {
  return (
    <header
      className="bg-[#3e54ac] text-white py-3 px-6 flex items-center justify-between"
      dir="rtl"
    >
      {/* Right side: Logo & Menu */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Hamburger Menu (Far Right) */}
        <BrandButton
          variant="ghost"
          className="text-white hover:bg-white/10 p-2 shadow-none border-none"
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7" />
        </BrandButton>
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <div className="hidden sm:block bg-white/10 p-1.5 rounded-lg border border-white/20">
            <Link
              className="w-4 h-4 md:w-5 md:h-5 rotate-45 text-white"
              strokeWidth={3}
            />
          </div>
          <span className="text-xl md:text-2xl font-black italic tracking-tighter">
            لنكي
          </span>
        </div>
      </div>

      {/* Center: Search (Desktop Only) */}
      <div className="hidden lg:flex flex-1 max-w-xl relative mr-8">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="ابحث"
            className="bg-[#2a3c85] border-[#445bb7] text-white placeholder:text-gray-400 rounded-md pr-10 focus-visible:ring-0 focus-visible:bg-[#233375] h-10 text-right w-full"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Left side: Profile & Actions */}
      <div className="flex items-center gap-1 md:gap-2 pr-0 md:pr-4">
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] md:text-xs text-gray-300 ml-2 md:ml-4">
          <div className="w-4 h-4 md:w-5 md:h-5 bg-lime-500 rounded-full flex items-center justify-center text-[8px] md:text-[10px] text-black font-bold border border-lime-600/20">
            ع
          </div>
          <span className="hidden md:inline">العربية</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
        <BrandButton
          variant="ghost"
          size="icon"
          className="hidden md:flex text-white hover:bg-white/10 rounded-full w-8 h-8 md:w-9 md:h-9 shadow-none border-none"
        >
          <Headset className="w-5 h-5 opacity-80" />
        </BrandButton>
        <BrandButton
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full w-8 h-8 md:w-9 md:h-9 shadow-none border-none"
        >
          <Bell className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
        </BrandButton>
        <BrandButton
          variant="ghost"
          size="icon"
          className="hidden md:flex text-white hover:bg-white/10 rounded-full w-8 h-8 md:w-9 md:h-9 shadow-none border-none"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
        </BrandButton>
        <BrandButton
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full border border-white/20 w-8 h-8 md:w-9 md:h-9 ml-1 md:ml-2 shadow-none"
        >
          <span className="font-bold text-[10px] md:text-xs">AA</span>
        </BrandButton>
      </div>
    </header>
  );
}

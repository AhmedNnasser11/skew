import { Search, Bell, Mail, Headset, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopNav() {
  return (
    <header
      className="bg-[#3e54ac] text-white py-3 px-6 flex items-center justify-between"
      dir="rtl"
    >
      {/* Right side: Logo & Menu */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu (Far Right) */}
        <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-45 text-white"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <span className="text-2xl font-black italic tracking-tighter">
            لنكي
          </span>
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xl relative mr-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="ابحث"
            className="bg-[#2a3c85] border-[#445bb7] text-white placeholder:text-gray-400 rounded-md pr-10 focus-visible:ring-0 focus-visible:bg-[#233375] h-10 text-right w-full"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Left side: Profile & Actions */}
      <div className="flex items-center gap-2 pr-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-300 ml-4">
          <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center text-[10px] text-black font-bold border border-lime-600/20">
            ع
          </div>
          <span>العربية</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full w-9 h-9"
        >
          <Headset className="w-5 h-5 opacity-80" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full w-9 h-9"
        >
          <Bell className="w-5 h-5 opacity-80" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full w-9 h-9"
        >
          <Mail className="w-5 h-5 opacity-80" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 rounded-full border border-white/20 w-9 h-9 ml-2"
        >
          <span className="font-bold text-xs">AA</span>
        </Button>
      </div>
    </header>
  );
}

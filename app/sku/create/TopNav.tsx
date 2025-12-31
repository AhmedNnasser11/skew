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
          <Menu className="w-7 h-7" />
        </Button>
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/20">
            <Link className="w-5 h-5 rotate-45 text-white" strokeWidth={3} />
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

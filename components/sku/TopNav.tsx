import { Search, Bell, Mail, Headset, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function TopNav() {
  return (
    <header
      className="bg-[#3e54ac] text-white py-3 px-6 flex items-center justify-between"
      dir="rtl"
    >
      {/* Right side: Logo & Menu */}
      <div className="flex items-center gap-6">
        <div className="text-2xl font-bold flex items-center gap-2">
          {/* Logo Placeholder */}
          <span className="text-3xl font-black italic">لنكي</span>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xl mx-auto relative">
        <Input
          type="text"
          placeholder="ابحث..."
          className="bg-[#2a3c85] border-none text-white placeholder:text-gray-300 rounded-md pr-10 focus-visible:ring-0 focus-visible:bg-[#233375] h-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
      </div>

      {/* Left side: Profile & Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
          >
            <span className="font-bold text-sm">AA</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
          >
            <Mail className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 rounded-full"
          >
            <Headset className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-1 text-sm">
            <span>العربية</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        <div className="flex items-center gap-3 text-right">
          <div className="hidden md:block">
            <p className="text-sm font-bold">Mohamed Ahmed</p>
            <p className="text-xs text-gray-300">mo_nayef123@gmail.com</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-white/20">
            <AvatarFallback className="bg-blue-600 text-white">
              MA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

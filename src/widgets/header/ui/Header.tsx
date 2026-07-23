import * as React from "react";
import { Button } from "@/shared/ui/Button";
import { RxCross2, RxChevronDown, RxDotsHorizontal } from "react-icons/rx";
import { Logo } from "@/shared/ui/icons/Logo";

export const Header = () => {
  return (
    <header className="w-full h-[104px] px-4 pb-3 rounded-b-[32px] border-b bg-white/5 border-white/5 backdrop-blur-md flex flex-col justify-end">
      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-14"></div>
        <div className="w-full h-8 flex items-center justify-between relative">
          <Button variant="close" size="closeSize">
            <RxCross2 className="w-6 h-6" />
            <span className="text-sm font-medium leading-[22px] ">Close</span>
          </Button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>
          <div className="flex items-center gap-[2px] bg-[rgba(65,63,64,0.4)] backdrop-blur-md rounded-[32px] h-8 py-[4px] pr-[12px] pl-[6px]">
            <Button variant="ghost" size="xs">
              <RxChevronDown className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="xs">
              <RxDotsHorizontal className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

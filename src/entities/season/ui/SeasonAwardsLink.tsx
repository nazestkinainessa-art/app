import { Button } from "@/shared/ui/Button";
import * as React from "react";

export const SeasonCard = () => {
  return (
    <Button className="w-full p-3 rounded-2xl ing-1 ring-inset ring-white/10 justify-between bg-white/10 backdrop-blur-[13.7px] flex items-center">
        <p className="font-bold text-[14px] leading-[20px] text-white">Награды будущего сезона</p> 

    </Button>
  );
}
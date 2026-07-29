import * as React from "react";
import { Button } from "../Button";

export const SegmentedControl = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex items-center gap-1 w-full p-1 mt-4 rounded-full bg-white/10 border-[0.5px] border-white/40">
        <Button
          variant="ghost"
          className="flex-1 h-9 rounded-full bg-white/10 text-white/95 text-[16px] text-center font-semibold"
        >
          По сезонам
        </Button>
        <Button 
          variant="ghost"
          className="flex-1 h-9 rounded-full text-zinc-400 text-[16px] text-center font-semibold hover:text-white"
        >
          Общий
        </Button>
      </div>
    </div>
  );
};

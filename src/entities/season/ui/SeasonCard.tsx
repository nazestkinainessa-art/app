import * as React from "react";

export const SeasonCard = () => {
  return (
    <div className="w-[85%] shrink-0 min-h-[104px] p-4 rounded-[24px] ring-1 ring-inset ring-white/10 bg-white/5 backdrop-blur-md bg-gradient-to-r from-transparent via-yellow-500/20 to-yellow-500/40 flex flex-col justify-between relative overflow-hidden">
      <div className="w-[162.54px] h-[281.54px] rounded-full bg-[#FFC900] blur-[150.2px] absolute rotate-[-68.79deg] right-[-600px] bottom-[-60px]">
      </div>
      <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-1 ">
        <p className="text-[14px] font-medium leading-[20px] text-white/70">Текущий сезон</p>
        <p className="text-[18px] font-bold leading-[20px] text-white">Сезон 1</p>
      </div>
      <p className="text-[12px] font-medium leading-[100%] text-white/70">12.07.2026 - 25.07.2026 </p>
      </div>
      </div>
  );
};

import * as React from "react";

interface PageHeadingProps {
  description: string;
}

export const PageHeading = ({ description }: PageHeadingProps) => {
  return (
    <div className="w-full flex flex-col gap-3 items-center px-4 mt-4">
      <h1 className="text-2xl font-bold text-center text-white leading-none">
        РЕЙТИНГ
      </h1>
      <p className="text-[10px] font-bold leading-[135%] text-white/70 uppercase text-center">
        {description}
      </p>
    </div>
  );
};

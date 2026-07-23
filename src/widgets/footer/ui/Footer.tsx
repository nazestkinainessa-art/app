import * as React from "react";
import { Button } from "@/shared/ui/Button";
import { IconAlbum } from "@/shared/ui/icons/IconAlbum";
import { IconPostcard } from "@/shared/ui/icons/IconPostcard";
import { IconTasks } from "@/shared/ui/icons/IconTasks";
import { IconLeaders } from "@/shared/ui/icons/IconLeaders";
import { IconPartners } from "@/shared/ui/icons/IconPartners";
import { IconProfile } from "@/shared/ui/icons/IconProfile";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full pt-4 px-4 pb-6 z-50 flex justify-center">
      <div className="w-full h-[58px] p-1 flex items-center rounded-full bg-white/10 border-[0.5px] border-white/20 backdrop-blur-[30.5px]">
        <Button variant="nav" size="nav">
          <IconAlbum />
          Альбом
        </Button>
        <Button variant="nav" size="nav">
          <IconPostcard />
          Открытка
        </Button>
        <Button variant="nav" size="nav">
          <IconTasks />
          Задания
        </Button>
        <Button variant="navActive" size="nav">
          <IconLeaders />
          Лидеры
        </Button>
        <Button variant="nav" size="nav">
          <IconPartners />
          Партнеры
        </Button>
        <Button variant="nav" size="nav">
          <IconProfile />
          Профиль
        </Button>
      </div>
    </footer>
  );
};

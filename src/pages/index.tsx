import * as React from "react";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";
import { PageHeading } from "@/shared/heading/PageHeading";
import { SegmentedControl } from "@/shared/ui/segmented/SegmentedControl";

export default function Leaders() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-900 font-sans">
      <div className="flex flex-col w-full min-w-[320px] max-w-[475px] min-h-screen bg-black text-white relative shadow-2xl overflow-hidden">
        <Header />

        <main className="flex-1">
          <PageHeading description="ПРОДВИГАЙТЕСЬ В РЕЙТИНГЕ СЕЗОНА И ПОЛУЧАЙТЕ НАГРАДЫ,ОПЫТ СУММИРУЕТСЯ В ОБЩИЙ РЕЙТИНГ" />
          <SegmentedControl />
        </main>

        <Footer />
      </div>
    </div>
  );
}

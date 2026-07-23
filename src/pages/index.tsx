import * as React from "react";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function Leaders() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-900 font-sans">
      <div className="w-full min-w-[320px] max-w-[475px] bg-black text-white relative shadow-2xl overflow-hidden">
        <Header />

        <main className="flex-1"></main>

        <Footer />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import SplashScreen from "@/components/splashscreen/SplashScreenClient";
import Header from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

export default function SplashLayout({ children }: Props) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {splashDone && (
        <div className="w-[1920px] relative bg-white">
          <Header />
          <main className="w-full min-h-screen">
            {children}
          </main>
        </div>
      )}
    </>
  );
}
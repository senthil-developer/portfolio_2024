"use client";

import PLaceHolderComponent from "@/components/PLaceHolderComponent";
import dynamic from "next/dynamic";
import Scene from "@/components/NotFoundCanvaPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="0 relative h-screen dark:pt-1">
      <Suspense fallback={<PLaceHolderComponent />}>
        <Scene />
      </Suspense>
    </main>
  );
}

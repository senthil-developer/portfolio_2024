"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";
import Particles from "@/app/particles";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Particles id="tsparticles" done={init} />
    </main>
  );
}

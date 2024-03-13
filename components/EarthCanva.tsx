"use client";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/model/Earth";
import { Environment, OrbitControls } from "@react-three/drei";

export default function EarthCanva() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <Model />
      <ambientLight intensity={0.5} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
      <directionalLight intensity={2} position={[0, 2, 3]} />

      <Environment preset="apartment" />
    </Canvas>
  );
}

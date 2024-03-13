"use client";

import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Ball = ({ url }: { url: string }) => {
  const [decal] = useTexture([url]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Skill = ({ url }: { url: string }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
      className=""
    >
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
      />
      <Ball url={url} />
    </Canvas>
  );
};
export default Skill;

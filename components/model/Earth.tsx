"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props: any) {
  const { nodes, materials } = useGLTF("/models/earth.glb");
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        geometry={(nodes.Sphere as THREE.SkinnedMesh).geometry}
        material={materials.earth}
      />
    </group>
  );
}

useGLTF.preload("/models/earth.glb");

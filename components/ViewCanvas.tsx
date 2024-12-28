"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ViewCanvas() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      camera={{
        fov: 30,
      }}
      shadows={true}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <View.Port />
    </Canvas>
  );
}

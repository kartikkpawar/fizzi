"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

function SkyDive() {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">Dive into better health</h2>
      {/* This line is only for screen reader */}
      <View className="h-screen w-screen">
        <Scene />
      </View>
    </Bounded>
  );
}

export default SkyDive;

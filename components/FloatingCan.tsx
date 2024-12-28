"use client";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "./SodaCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavour?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavour = "blackCherry",
      floatIntensity = 1,
      floatSpeed = 1.5,
      floatingRange = [-0.1, 0.1],
      rotationIntensity = 1,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavour} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;

"use client";
import { ArrowIcon } from "@/components/ArrowIcon";
import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { WavyCircles } from "@/components/WavyCircles";
import { Center, Environment, View } from "@react-three/drei";
import clsx from "clsx";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Group } from "three";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

const SPINS_ON_CHANGE = 8;

export default function CansCarousel() {
  const [currentFlavourIndex, setCurrentFlavourIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);

  function changFlavour(index: number) {
    if (!sodaCanRef.current) return;
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();
    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavourIndex
            ? `+=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `-=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: -10,
          opacity: 0,
        },
        0
      )
      .to(
        {},
        {
          onStart: () => setCurrentFlavourIndex(nextIndex),
        },
        0.5
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: 0,
          opacity: 1,
        },
        0.7
      );
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavour
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center">
        <ArrowButton
          direction="left"
          label="Previous Favour"
          onClick={() => changFlavour(currentFlavourIndex - 1)}
        />

        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              ref={sodaCanRef}
              floatIntensity={0.3}
              rotationIntensity={1}
              flavour={FLAVORS[currentFlavourIndex].flavor}
            />
          </Center>
          <Environment
            files={"/hdr/lobby.hdr"}
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        <ArrowButton
          direction="right"
          label="Next Flavour"
          onClick={() => changFlavour(currentFlavourIndex + 1)}
        />
      </div>
      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium ">
          <p>{FLAVORS[currentFlavourIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <p>12 cans - $35.99</p>
        </div>
      </div>
    </section>
  );
}

type ArrowButtonProps = {
  direction: "right" | "left";
  label: string;
  onClick: () => void;
};
function ArrowButton({
  direction = "right",
  label,
  onClick,
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring--4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

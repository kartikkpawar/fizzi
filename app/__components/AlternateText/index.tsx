"use client";
import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import clsx from "clsx";

const data = [
  {
    heading: "Gut-Friendly Goodness",
    body: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    heading: "Light Calories, Big Flavor",
    body: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise",
  },
  {
    heading: "Naturally Refreshing",
    body: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

function AlternateText() {
  return (
    <Bounded className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {data.map((textData, index) => (
            <div
              key={textData.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30"
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {textData.heading}
                </h2>
                <div className="mt-4 text-xl">
                  <p>{textData.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}

export default AlternateText;

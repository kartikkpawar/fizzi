"use client";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() { 
  
  useGSAP(() => {
    const introTl = gsap.timeline();
    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8", // equivalent to `delay:0.8`
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top", // Starts when the top of the element hits the top of the viewport
        end: "bottom bottom", // Ends when the bottom of the element hits the bottom of the viewport
        scrub: 1.5, // Smoothly animates the element as you scroll\
        markers: true, // Adds markers to the scrollbar
      },
    });

    scrollTl
      .fromTo(
        "body",
        { backgroundColor: "#FDE047" },
        { backgroundColor: "#D9F99D", overrite: "auto" },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <Bounded
      className="hero opacity-0" // Set the initial opacity to 0 and animate it to 1 using gsap
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-bold uppercase leading-[0.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text={'Live Gutsy'}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
           <h2> Soda Perfected</h2>
            </div>
            <div className="hero-body text-2xl font-normal text-sky-900">
           <p> 3-5g sugar. 9g fiber. 5 delicious flavors.</p>
            </div>
            <Button
              buttonLink={'https://kartikpawar.dev/'}
              buttonText={'Shop Now'}
              className="hero-button mt-12"
            />
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src={'/assets/all-cans-bunched.png'}
            alt="All flavours"
            className="w-full md:hidden"
            width={300} height={300} />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black text-sky-950 lg:text-8xl">
              <TextSplitter text={'Try all five flavours'} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
             <p>Our soda is made with real fruit juice and a touch of cane sugar. We never use artificial sweeteners or high fructose corn syrup. Try all five flavors and find your favorite!</p>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );

}

import Hero from "@/app/__components/Hero";
import React, { Fragment } from "react";
import SkyDive from "./__components/SkyDive";
import CansCarousel from "./__components/CansCarousel";
import AlternateText from "./__components/AlternateText";
import BigText from "./__components/BigText";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <SkyDive />
      <CansCarousel />
      <AlternateText />
      <BigText />
    </Fragment>
  );
}

export default HomePage;

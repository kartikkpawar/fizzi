import Hero from "@/app/__components/Hero";
import React, { Fragment } from "react";
import SkyDive from "./__components/SkyDive";
import CansCarousel from "./__components/CansCarousel";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <SkyDive />
      <CansCarousel />
    </Fragment>
  );
}

export default HomePage;

import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import MenuSection from "@/components/Menu/MenuSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <MenuSection sectionTitle="our popular menu" />
    </>
  );
}

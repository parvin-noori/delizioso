import Banner from "@/components/Banner/Banner";
import Chefs from "@/components/Chefs/Chefs";
import CustomersReview from "@/components/customersReview/CustomersReview";
import Hero from "@/components/Hero/Hero";
import MenuSection from "@/components/Menu/MenuSection";
import Reservation from "@/components/reservation/Reservation";
import ServiceHours from "@/components/ServiceHours/ServiceHours";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <MenuSection sectionTitle="our popular menu" />
      <Reservation />
      <Chefs />
      <CustomersReview/>
      <ServiceHours/>
    </>
  );
}

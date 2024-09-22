import { Banner } from "@/components/Banner";
import { Chefs } from "@/components/Chefs";
import { CustomersReview } from "@/components/customers-review";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menu";
import { Reservation } from "@/components/reservation";
import { ServiceHours } from "@/components/Service-hours";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <MenuSection sectionTitle="our popular menu" />
      <Reservation />
      <Chefs />
      <CustomersReview />
      <ServiceHours />
    </>
  );
}

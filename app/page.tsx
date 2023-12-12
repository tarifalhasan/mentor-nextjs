import BeAExpert from "@/components/BeAExpert";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostAsksQuestion from "@/components/MostAsksQuestion";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <BeAExpert />
      <Testimonial />
      <MostAsksQuestion />
      <Footer />
    </>
  );
}

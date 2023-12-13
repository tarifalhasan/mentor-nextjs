import BeAExpert from "@/components/BeAExpert";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostAsksQuestion from "@/components/MostAsksQuestion";
import PeopleLoveUs from "@/components/PeopleLoveUs";
import PopularExpertMentors from "@/components/PopularExpertMentors";
import Testimonial from "@/components/Testimonial";
import WhyChooseBookConnect from "@/components/WhyChooseBookConnect";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <PopularExpertMentors />
      <WhyChooseBookConnect />
      <PeopleLoveUs />
      <Features />
      <BeAExpert />
      <Testimonial />
      <MostAsksQuestion />
      <Footer />
    </>
  );
}

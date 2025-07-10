import Image from "next/image";
import HeroSection from "../Components/Home/HeroSection";
import KeyFeature from "../Components/Home/KeyFeature";
import ContactSection from "../Components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyFeature/>
      <ContactSection/>
    </>
  );
}

import Image from "next/image";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { AboutUsSection } from "./_components/AboutUsSection";
import { DetailSection } from "./_components/DetailSection";
import { Footer } from "./_components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <DetailSection />
      <Footer />
    </div>
  );
}

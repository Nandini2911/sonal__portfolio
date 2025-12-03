import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import LuxuryBrandsSection from "@/components/luxury-collaborations";

import LuxuryBrandsSlide from "@/components/luxury-brands";
import StyleSignatureSection from "@/components/sonal-portrait";
import LuxuryTravelSection from "@/components/sonal travel";
import LuxuryLooksSection from "@/components/whileInView";
import ConnectSection from "@/components/contact";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <Hero />
        <AboutIntro />
        <LuxuryBrandsSection  />
        <LuxuryBrandsSlide/>  
        <StyleSignatureSection  />
        <LuxuryTravelSection/>
        <LuxuryLooksSection/>
        <ConnectSection/>
    
      </div>
    </main>
  );
}

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LuxurySection from "./components/LuxurySection";
import AmenitiesSection from "./components/AmenitiesSection";
import FloorPlansSection from "./components/FloorPlansSection";
import ContactUs from "./components/ContactUs";
import EMICalculator from "./components/EmiCalculator";
import GallerySection from "./components/GalarySection";
import FAQ from "./components/faq";
import VideoWalkthrough from "./components/VideoWalkthrough";
import LifestyleSection from "./components/EnhancingLifeStyle";
import Footer from "./components/footer";
import LocationAdvantages from "./components/LocationAdvantage";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LuxurySection />
      <AmenitiesSection />
      <FloorPlansSection />
      <VideoWalkthrough />
      <LifestyleSection />
      <GallerySection />
      <LocationAdvantages />
      <FAQ />
      <EMICalculator />
      <ContactUs />
      <Footer />
    </div>
  );
}

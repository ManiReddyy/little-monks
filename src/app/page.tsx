import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import CustomCursor from "@/components/global/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutUs from "@/components/sections/AboutUs";
import ScrollStory from "@/components/sections/ScrollStory";
import Programs from "@/components/sections/Programs";
import Facilities from "@/components/sections/Facilities";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VisitUs from "@/components/sections/VisitUs";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Safety from "@/components/sections/Safety";
import InstagramStory from "@/components/sections/InstagramStory";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      <HeroSection />
      <TrustBar />
      <AboutUs />
      <ScrollStory />
      <Programs />
      <Facilities />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Safety />
      <InstagramStory />
      <FinalCTA />
      <VisitUs />
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

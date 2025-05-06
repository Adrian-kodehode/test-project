// import ChatCard from "../../components/ChatCard";
// import Buttons from "../../components/Buttons";
// import Contributors from "../../components/Contributors";
// import List from "../../components/List";
// import ImageTiles from "../../components/ImageTiles";
import { FeatureSection } from "app/components/home/FeatureSection";
import { Footer } from "app/components/home/Footer";
import { HeroSection } from "app/components/home/HeroSection";
import Navbar from "app/components/home/Navbar";
import { Pricing } from "app/components/home/Pricing";
import { Testimonials } from "app/components/home/Testimonials";
import { Workflow } from "app/components/home/Workflow";

export default function home() {
  return (
    <div>
      {/* <ChatCard />
      <ImageTiles />
      <List />
      <Buttons />
      <Contributors /> */}
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

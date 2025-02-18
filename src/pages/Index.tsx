
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Tickets from "@/components/Tickets";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Schedule />
      <Gallery />
      <Tickets />
    </div>
  );
};

export default Index;

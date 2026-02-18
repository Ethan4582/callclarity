import Hero from "@/src/components/Landing_pages/Hero";
import Navbar from "@/src/components/Landing_pages/Navbar";
import Feature from "@/src/components/Landing_pages/Feature";
import Benefits from "@/src/components/Landing_pages/Benefits";
import Benefits2 from "@/src/components/Landing_pages/Benefits2";
import Testimonial from "@/src/components/Landing_pages/testimonial";
import Footer from "@/src/components/Landing_pages/Footer";
import Pricing from "@/src/components/Landing_pages/Pricing";
import Faq from "@/src/components/Landing_pages/Faq";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto relative flex flex-col">
        <Navbar />
        <Hero />
      </div>

      <main className="flex flex-col gap-0 w-full">
        <Feature />
        <Benefits />
        <Benefits2 />
        <Testimonial />
        <Pricing />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}

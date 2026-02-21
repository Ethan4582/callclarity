import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Landing_pages/Navbar";
import Feature from "@/src/components/Landing_pages/Feature";
import Benefits from "@/src/components/Landing_pages/Benefits";
import Benefits2 from "@/src/components/Landing_pages/Benefits2";
import Testimonial from "@/src/components/Landing_pages/testimonial";
import Footer from "@/src/components/Landing_pages/Footer";
import Pricing from "@/src/components/Landing_pages/Pricing";
import Faq from "@/src/components/Landing_pages/Faq";
import Chat from "@/src/components/chat";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto relative flex flex-col">
        <Navbar />
      
        <div className="md:hidden h-28" />
        <Hero />
      </div>

      <main className="flex flex-col gap-0 w-full">
        <section id="features">
          <Feature />
        </section>
        <section id="benefits-1">
          <Benefits />
        </section>
        <Benefits2 />
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Faq />
      </main>

      <Chat />

      <Footer />
    </div>
  );
}

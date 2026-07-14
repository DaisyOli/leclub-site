import Hero from "@/components/Hero";
import Local from "@/components/Local";
import Sobre from "@/components/Sobre";
import FloatingWhatsAppDesktop from "@/components/FloatingWhatsAppDesktop";
import Footer from "@/components/Footer";
import PlansSection from "@/components/plans/PlansSection";

export default function Home() {
  return (
    <main >
      <Hero />
      <Sobre />
      <Local />
      <PlansSection />
       <FloatingWhatsAppDesktop />
       <Footer />
    </main>
  );
}

      

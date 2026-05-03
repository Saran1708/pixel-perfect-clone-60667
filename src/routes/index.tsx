import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Colleges } from "@/components/site/Colleges";
import { Process } from "@/components/site/Process";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Values } from "@/components/site/Values";
import { Trust } from "@/components/site/Trust";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative pointer-events-auto">
        <Hero />
        <About />
        <Services />
        <Process />
        <Colleges />
        <WhyChoose />
        <Trust />
        <Values />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

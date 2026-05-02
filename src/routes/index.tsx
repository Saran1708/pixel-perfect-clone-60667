import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useLenis } from "@/hooks/use-lenis";
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
import { FloatingContacts } from "@/components/site/FloatingContacts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EDZUP — Free admission guidance for +2 students in Coimbatore" },
      { name: "description", content: "EDZUP provides 100% free guidance to +2 students in Coimbatore for choosing the right Engineering or Arts & Science college. Call 9994538133." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useLenis();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
      <FloatingContacts />
    </div>
  );
}

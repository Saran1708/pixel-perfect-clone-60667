import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Courses } from "@/components/site/Courses";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Values } from "@/components/site/Values";
import { Mission } from "@/components/site/Mission";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChoose />
        <Values />
        <Mission />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

import { User, Trophy, Wallet, Star } from "lucide-react";
import whyImg from "@/assets/why-man.jpg";

const LEFT = [
  { icon: User, title: "Expert instructors", text: "Our instructors are creative minds and strategic thinkers." },
  { icon: Wallet, title: "Affordable pricing", text: "We're a team of creative minds and skilled experts." },
];
const RIGHT = [
  { icon: Trophy, title: "Awards", text: "But along the way, our work has been honored." },
  { icon: Star, title: "Reviews", text: "Strategic placements for testimonials build trust." },
];

export function WhyChoose() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-6xl font-black">Why choose Tutorly</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
          Designed for better learning. Built for real success. Designed for better learning. Built for real success.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="grid gap-6">
            {LEFT.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={whyImg} alt="" loading="lazy" width={800} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-6">
            {RIGHT.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.2)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-12 text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-muted-foreground">{text}</p>
    </div>
  );
}

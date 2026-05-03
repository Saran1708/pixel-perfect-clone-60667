import { HeartHandshake, ShieldCheck, MapPin, Award, Globe, GraduationCap } from "lucide-react";
import processImg from "@/assets/edzup-whychoose.jpg";

const LEFT = [
  { icon: HeartHandshake, title: "Genuine intent", text: "Started to help families who lack guidance — not for profit." },
  { icon: ShieldCheck, title: "100% free service", text: "No fees, no commissions, no hidden costs — ever." },
  { icon: GraduationCap, title: "All streams supported", text: "Engineering, Medical, MBBS, Arts, Science, UG, PG, and abroad colleges." },
];
const RIGHT = [
  { icon: MapPin, title: "Tamil Nadu expertise", text: "In-depth knowledge of colleges and admission processes across Tamil Nadu." },
  { icon: Award, title: "Proven outcomes", text: "Students placed in top colleges every admission cycle." },
  { icon: Globe, title: "Abroad college guidance", text: "Expert support for international education pathways and overseas admissions." },
];

export function WhyChoose() {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Why EDZUP</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">Why families trust us</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="grid gap-5">
            {LEFT.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 reveal">
            <img src={processImg} alt="Graduation cap and diplomas" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-5">
            {RIGHT.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="reveal rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.18)] transition hover:-translate-y-1">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

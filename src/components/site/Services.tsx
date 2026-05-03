import { GraduationCap, Compass, Wallet, BarChart3, ShieldCheck, ListChecks, Building2 } from "lucide-react";

const SERVICES = [
  { icon: GraduationCap, title: "College selection", text: "Help choosing colleges for Engineering, Medical, MBBS, Arts, Science & all UG, PG courses." },
  { icon: Compass, title: "Career guidance", text: "Honest direction based on your interests, marks and goals." },
  { icon: GraduationCap, title: "Abroad colleges guidance", text: "Expert assistance for international education pathways and overseas college admissions." },
  { icon: Wallet, title: "Loan process support", text: "Step-by-step guidance through education loan applications." },
  { icon: BarChart3, title: "Cut-off explanation", text: "Understand cut-offs and where you really stand." },
  { icon: ShieldCheck, title: "FREE engineering seats", text: "Assistance securing free engineering seat opportunities." },
  { icon: ListChecks, title: "7.5 category filling", text: "Complete support for 7.5% category choice filling." },
  { icon: Building2, title: "Management & Govt seats", text: "Arrangement of management and government seat options." },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">What We Do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">Comprehensive FREE services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground">
            Everything a +2 student needs at the most critical moment of their academic life — completely free.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(20,40,90,0.35)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-accent2 group-hover:text-accent2-foreground transition">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          ))}

          <article className="rounded-2xl bg-brand p-6 text-brand-foreground ring-1 ring-brand/20 reveal">
            <p className="text-[12px] font-semibold uppercase tracking-wider opacity-80">100% Free</p>
            <h3 className="mt-2 text-xl font-semibold leading-snug">For every single student — without exception.</h3>
            <p className="mt-3 text-[13px] opacity-85">No hidden charges. No commission. Just honest guidance from people who care.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

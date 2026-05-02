import { ShieldCheck, Star, Users, Heart, Quote } from "lucide-react";

const STATS = [
  { icon: Users, num: "500+", label: "Students guided" },
  { icon: ShieldCheck, num: "100%", label: "Free, always" },
  { icon: Star, num: "4.9", label: "Avg. parent rating" },
  { icon: Heart, num: "35+", label: "Partner colleges" },
];

const TESTIMONIALS = [
  {
    name: "Priya R.",
    role: "Parent, Coimbatore",
    text: "Dharani sir helped us pick the right Engineering college within our budget. Honest advice — never asked for money.",
  },
  {
    name: "Karthik S.",
    role: "B.E. CSE student",
    text: "I had no idea about cut-offs and choice filling. EDZUP guided me step by step. Got into my dream college.",
  },
  {
    name: "Lakshmi & family",
    role: "Single-parent home",
    text: "We were lost after +2 results. EDZUP gave us clarity and confidence — and a great Arts college seat.",
  },
];

export function Trust() {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Trusted by families</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">Real stories. Real outcomes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground">
            Hundreds of students across Coimbatore have walked into the right college with EDZUP — at zero cost.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 reveal">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 text-center shadow-[0_6px_24px_-18px_rgba(0,0,0,0.18)]">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-4 w-4" />
              </span>
              <div className="mt-3 text-2xl md:text-3xl font-bold text-brand">{s.num}</div>
              <div className="mt-1 text-[12px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)] transition hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-accent2/20" />
              <blockquote className="text-[14px] leading-relaxed text-foreground/85">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground text-[12px] font-bold">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
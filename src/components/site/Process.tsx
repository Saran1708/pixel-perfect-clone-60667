import { ClipboardList, MessageSquare, GraduationCap, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Submit enquiry", text: "Fill the simple multi-step form with your details and preferences." },
  { icon: MessageSquare, title: "Free counselling", text: "Our team reaches out personally to understand your goals." },
  { icon: GraduationCap, title: "College & course plan", text: "We map out the best-fit colleges based on your marks and interest." },
  { icon: CheckCircle2, title: "Admission secured", text: "Choice filling, documentation and seat — handled together." },
];

export function Process() {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">How it works</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">A simple, stress-free process</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="absolute -top-3 right-4 rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-brand-foreground">
                Step {i + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent2/10 text-accent2">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

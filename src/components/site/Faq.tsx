import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Is the service really free?", a: "Yes — completely free for every student. No fees, no commissions, no hidden charges. EDZUP exists to help families that lack guidance." },
  { q: "Who can apply for guidance?", a: "Any +2 / Class 12 student in Tamil Nadu, especially Coimbatore region, who needs help choosing the right college and course." },
  { q: "When should I reach out?", a: "As early as possible — ideally before or right after +2 results (May 8th, 2026). Early action means better seats." },
  { q: "Which colleges do you work with?", a: "All major Engineering and Arts & Science colleges in Coimbatore — PSG, CIT, Amrita, KCT, SKCET, GCT, KPR and many more." },
  { q: "Do you help with 7.5% category?", a: "Yes — we provide complete support for 7.5% category choice filling along with management and government seat arrangements." },
  { q: "How do I get started?", a: "Fill the admission enquiry form on this site, or call/WhatsApp Dharani K.K. (MBA) on 9994538133." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">Common questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 transition ${isOpen ? "bg-accent2 text-accent2-foreground" : "bg-brand/10 text-brand"}`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-[15px] font-semibold">{f.q}</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[3.75rem] text-[14px] text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

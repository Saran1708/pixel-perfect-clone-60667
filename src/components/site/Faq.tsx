import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "What types of courses do you offer?", a: "We offer career-focused courses across design, development, data, cloud, and soft skills." },
  { q: "Are the courses beginner-friendly?", a: "Yes — every course starts with foundations and progresses to advanced, real-world projects." },
  { q: "How do I access the courses after enrolling?", a: "Once enrolled, you get lifetime access through your Tutorly dashboard on any device." },
  { q: "Are the courses self-paced?", a: "Absolutely. Learn anytime, anywhere — your progress saves automatically." },
  { q: "Do I receive a certificate after completion?", a: "Yes, you'll receive a verified certificate you can share on LinkedIn or with employers." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl md:text-6xl font-black">Frequently asked questions</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
          Our learners have used Tutorly to transition careers, secure promotions, and break into competitive industries.
        </p>
        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-full bg-white ring-1 ring-black/5 shadow-[0_4px_20px_-14px_rgba(0,0,0,0.2)] overflow-hidden transition-all data-[open=true]:rounded-3xl" data-open={isOpen}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted shrink-0">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                  <span className="text-lg font-bold">{f.q}</span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 pl-[4.5rem] text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Lightbulb, BookOpen, Crop, Wifi } from "lucide-react";

const ITEMS = [
  { icon: Lightbulb, title: "Clarity over excess complexity", text: "Pick from career-focused learning programs." },
  { icon: BookOpen, title: "Premium learning experience", text: "We focus on practical knowledge, hands-on projects." },
  { icon: Crop, title: "Professional platform experience", text: "Tutorly delivers a full LMS-style experience." },
  { icon: Wifi, title: "Outcome-driven learning process", text: "Every course is designed with a clear goal." },
];

export function Values() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-6xl font-black">The values that drive</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
          Designed for better learning. Built for real success. Designed for better learning. Built for real success.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {ITEMS.map((it) => (
            <div key={it.title} className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.2)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-16 text-xl font-bold leading-snug">{it.title}</h3>
              <p className="mt-4 text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

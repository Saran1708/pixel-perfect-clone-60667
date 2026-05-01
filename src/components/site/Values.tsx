import { Heart, Eye, Compass } from "lucide-react";

export function Values() {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-3">
        <div className="reveal rounded-3xl bg-brand p-7 text-brand-foreground">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Heart className="h-5 w-5" />
          </span>
          <h3 className="mt-6 text-xl font-semibold">Our Mission</h3>
          <p className="mt-3 text-[14px] opacity-85 leading-relaxed">
            To make sure no student in Coimbatore picks the wrong college simply because they didn't have someone to guide them.
          </p>
        </div>
        <div className="reveal rounded-3xl bg-white p-7 ring-1 ring-black/5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent2/10 text-accent2">
            <Eye className="h-5 w-5" />
          </span>
          <h3 className="mt-6 text-xl font-semibold">Our Vision</h3>
          <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
            A future where every student — regardless of background — gets honest, expert guidance for the most important decision of their academic life.
          </p>
        </div>
        <div className="reveal rounded-3xl bg-accent2 p-7 text-accent2-foreground">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
            <Compass className="h-5 w-5" />
          </span>
          <h3 className="mt-6 text-xl font-semibold">Our Promise</h3>
          <p className="mt-3 text-[14px] opacity-90 leading-relaxed">
            Honest advice. Free service. Real outcomes. We treat every student like our own family.
          </p>
        </div>
      </div>
    </section>
  );
}

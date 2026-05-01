import { Phone, MessageCircle, MapPin, User, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-brand text-brand-foreground reveal">
          <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent2/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 px-7 py-12 md:px-14 md:py-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Reach us for admissions now</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-[1.1]">
                Beat the rush — register today.
              </h2>
              <p className="mt-4 text-[14px] opacity-85 max-w-md">
                Speak directly with our team. No bots, no waiting — real guidance from someone who has helped hundreds of students.
              </p>
              <div className="mt-7 space-y-3 text-[14px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><User className="h-4 w-4" /></span>
                  Dharani K.K. (MBA) — Founder
                </div>
                <a href="tel:9994538133" className="flex items-center gap-3 hover:text-accent2 transition">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Phone className="h-4 w-4" /></span>
                  9994538133
                </a>
                <a href="https://wa.me/919994538133" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent2 transition">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><MessageCircle className="h-4 w-4" /></span>
                  WhatsApp 9994538133
                </a>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 shrink-0"><MapPin className="h-4 w-4" /></span>
                  <span className="opacity-90">Stark Tower, Kamaraj Nagar, East Zone,<br />Kaalapatti Road, Coimbatore – 641014</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Admission Enquiry</p>
              <h3 className="mt-2 text-2xl font-semibold">Fill the form. We'll call you back.</h3>
              <p className="mt-3 text-[13px] opacity-80">A quick step-by-step form — personal details, academics, community and college preference. Takes about 3 minutes.</p>
              <Link to="/enquiry" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent2 py-3 pl-5 pr-1.5 text-[13px] font-semibold text-accent2-foreground hover:opacity-95 transition">
                START ENQUIRY FORM
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CalendarDays, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/edzup-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      {/* Soft brand blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.72_0.17_50/0.18)] blur-3xl animate-blob" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[oklch(0.32_0.09_260/0.18)] blur-3xl animate-blob [animation-delay:2s]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent2/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-accent2 uppercase">
              <Sparkles className="h-3 w-3" /> Admission Alert 2026
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-brand">
              Secure your future,<br />
              <span className="text-foreground">make the right call.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
              EDZUP gives <strong className="text-foreground font-semibold">+2 students</strong> in Coimbatore completely
              <strong className="text-accent2 font-semibold"> FREE </strong>
              guidance to choose the right college and course — Engineering, Arts &amp; Science, and all UG programs.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-brand py-3 pl-6 pr-2 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 transition"
              >
                APPLY FOR ADMISSION
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent2 text-accent2-foreground transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="https://wa.me/919994538133"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white py-3 px-5 text-[13px] font-semibold text-brand hover:bg-brand/5 transition"
              >
                Talk on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent2" /> 100% Free</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-accent2" /> +2 Results: May 8th</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-accent2" /> Coimbatore based</span>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative rounded-3xl bg-white p-6 shadow-[0_30px_80px_-30px_rgba(20,40,90,0.35)] ring-1 ring-black/5">
              <img src={heroImg} alt="EDZUP — guidance for higher education" width={1280} height={960} className="w-full h-auto rounded-2xl" />
              {/* Floating chip 1 */}
              <div className="absolute -left-4 top-8 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 animate-float-slow">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground text-sm font-bold">35+</span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold">Top Colleges</div>
                  <div className="text-[11px] text-muted-foreground">Coimbatore region</div>
                </div>
              </div>
              {/* Floating chip 2 */}
              <div className="absolute -right-4 bottom-8 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 animate-float-slow [animation-delay:1s]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent2 text-accent2-foreground text-sm font-bold">₹0</span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold">Always Free</div>
                  <div className="text-[11px] text-muted-foreground">For every student</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important date banner */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-brand text-brand-foreground animate-fade-up [animation-delay:240ms]">
          <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
          <div className="relative grid gap-4 px-6 py-5 md:grid-cols-3 md:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent2 text-accent2-foreground">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-wider opacity-70">Important</div>
                <div className="text-[15px] font-semibold">+2 Results on May 8th</div>
              </div>
            </div>
            <div className="text-[13px] opacity-90 md:col-span-1">
              மே 8 -ல் +2 ரிசல்ட்! Don't wait — make the correct decision <em>now</em>.
            </div>
            <div className="md:text-right">
              <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-accent2 px-5 py-2.5 text-[13px] font-semibold text-accent2-foreground hover:opacity-90 transition">
                Reserve guidance <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

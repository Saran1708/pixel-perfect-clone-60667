import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.png";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-black/5 reveal">
          <img src={aboutImg} alt="About EDZUP" loading="lazy" width={1024} height={1024} className="h-full w-full object-contain" />
        </div>
        <div className="reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">About EDZUP</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-[1.1] text-brand">
            Genuine, free guidance — because the right course shapes a lifetime.
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed">
            EDZUP is a Coimbatore-based educational consultancy founded to provide free, honest counselling
            to students and families who lack access to quality academic guidance. We saw too many students —
            especially from uneducated families, single-parent homes, or financially weak backgrounds — choosing
            the wrong courses and wasting their futures. EDZUP exists to change that.
          </p>

          <Link to="/enquiry" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand py-2.5 pl-5 pr-1.5 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 transition">
            GET FREE GUIDANCE
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent2 text-accent2-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <div className="mt-9 grid grid-cols-3 gap-3 rounded-2xl bg-white/70 p-5 ring-1 ring-black/5">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">100%</div>
              <p className="mt-1.5 text-[12px] text-muted-foreground">Free for all students</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">35+</div>
              <p className="mt-1.5 text-[12px] text-muted-foreground">Top Coimbatore colleges</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-brand">7.5</div>
              <p className="mt-1.5 text-[12px] text-muted-foreground">Category choice filling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

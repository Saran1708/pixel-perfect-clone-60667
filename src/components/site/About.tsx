import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-man.jpg";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">About Tutorly</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black leading-[1.05]">
            Tutorly helps creators deliver this through a professional, structured, and conversion-optimized platform. Learners want{" "}
            <span className="text-muted-foreground font-black">practical skills, and flexible learning.</span>
          </h2>
          <button className="group mt-8 flex items-center gap-2 rounded-full bg-black py-2.5 pl-6 pr-1.5 text-sm font-bold text-white">
            CONTACT US
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

          <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl bg-white/60 p-6 ring-1 ring-black/5">
            <div>
              <div className="text-3xl md:text-4xl font-black">70%+</div>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground">learners report career improvement</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black">25000+</div>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground">students enrolled our tutorly courses</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black">100%</div>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground">Student satisfaction. this is our first priority</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={aboutImg} alt="About Tutorly" loading="lazy" width={900} height={700} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

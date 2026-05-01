import { ArrowRight, Play, User, Video } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-28 md:pb-36">
        {/* floating cards */}
        <div className="hidden md:block absolute left-2 top-[55%] rounded-2xl bg-white px-5 py-3.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
              <User className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Expert tutor</div>
            </div>
          </div>
        </div>
        <img
          src={avatar1}
          alt=""
          loading="lazy"
          className="hidden md:block absolute left-[18%] top-[78%] h-16 w-16 rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
        />
        <div className="hidden md:block absolute right-2 top-[40%] rounded-2xl bg-white px-5 py-3.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
              <User className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-bold">120+</div>
              <div className="text-sm text-muted-foreground">Video Courses</div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute right-[10%] top-[62%] h-16 w-16 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
          <img src={avatar2} alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Play className="h-5 w-5 fill-white text-white" />
          </span>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full">
            <div className="flex -space-x-2">
              <img src={avatar1} alt="" loading="lazy" className="h-8 w-8 rounded-full ring-2 ring-background object-cover" />
              <img src={avatar2} alt="" loading="lazy" className="h-8 w-8 rounded-full ring-2 ring-background object-cover" />
              <span className="h-8 w-8 rounded-full ring-2 ring-background bg-gradient-to-br from-purple-300 to-pink-300" />
            </div>
            <span className="text-sm font-medium">125k+ student reviews</span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
            Build skills <br />
            New opportunities.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-muted-foreground">
            Tutorly gives you a complete learning experience that helps you gain real,
            job-ready skills and take the next step in your career.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="group flex items-center gap-3 rounded-full bg-black py-3 pl-7 pr-2 text-sm font-bold text-white">
              EXPLORE OUR COURSES
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

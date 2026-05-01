import { Zap, Check } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-6xl">
        {/* Newsletter */}
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 md:px-14 md:py-20 text-white">
          <div className="absolute inset-0 bg-grid-dark" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black leading-tight">
                Subscribe Our Newsletter for latest Updates
              </h3>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black"><Check className="h-3 w-3" /></span>
                  Daily design update
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black"><Check className="h-3 w-3" /></span>
                  Affiliate earning opportunity
                </span>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="ENTER YOU EMAIL"
                className="w-full rounded-full bg-transparent border border-white/20 px-7 py-4 text-sm tracking-wide placeholder:text-white/60 focus:outline-none focus:border-white/60"
              />
              <button className="rounded-full bg-white py-4 text-sm font-bold text-black tracking-wide hover:bg-white/90">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Footer columns */}
        <div className="mt-16 grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                <Zap className="h-5 w-5 fill-white" strokeWidth={0} />
              </span>
              <span className="text-3xl font-black">Tutorly</span>
            </div>
            <p className="mt-5 text-muted-foreground max-w-xs">
              A modern, business-ready online learning platform template built for course creators, academies, and educators
            </p>
          </div>
          <FooterCol title="Quick Link" items={["Home", "About us", "Courses", "Contact us"]} />
          <FooterCol title="Company" items={["Blog", "Blog details", "Courses details", "Mentor details"]} />
          <FooterCol title="Others" items={["Signup", "Login", "Style Guide", "Changelog"]} />
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tutorly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i}><a href="#" className="text-muted-foreground hover:text-foreground">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

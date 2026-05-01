import { Building2, BookOpen } from "lucide-react";
import collegesImg from "@/assets/edzup-colleges.jpg";

const ENGINEERING = [
  "PSG College of Technology",
  "Coimbatore Institute of Technology (CIT)",
  "Amrita School of Engineering",
  "Sri Krishna College of Engineering & Technology",
  "Kumaraguru College of Technology (KCT)",
  "Sri Krishna College of Technology (SKCT)",
  "KPR Institute of Engineering & Technology",
  "Karunya Institute of Technology and Sciences",
  "Government College of Technology (GCT)",
  "Nehru Institute of Engineering and Technology",
  "Rathinam Technical Campus",
  "Maharaja Institute of Technology",
  "Kalaivani College of Technology",
  "SNS College of Engineering",
  "Bannari Amman Institute of Technology",
];

const ARTS = [
  "PSG College of Arts & Science",
  "Dr. N.G.P. Arts and Science College",
  "Sri Krishna Arts and Science College",
  "Sri Ramakrishna College of Arts and Science",
  "Hindusthan College of Arts & Science",
  "Rathinam College of Arts & Science",
  "AJK College of Arts & Science",
  "Kongunadu Arts and Science College",
  "PPG College of Arts and Science",
  "CBM College",
  "CMS College of Science and Commerce",
  "Pioneer College of Arts and Science",
  "Kovai Kalaimagal College of Arts and Science",
  "SNS Rajalakshmi College of Arts and Science",
  "Nirmala College for Women",
  "PSGR Krishnamal College for Women",
  "Providence College for Women",
  "Sankara College of Science and Commerce",
  "V.L.B. Janakiammal College of Arts and Science",
  "Maharaja Arts and Science College",
];

export function Colleges() {
  const marquee = [...ENGINEERING, ...ARTS];
  return (
    <section id="colleges" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Coimbatore</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand">Colleges we handle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground">
            Direct experience with every major engineering and arts &amp; science college in the region.
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative mt-10 overflow-hidden reveal">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max gap-3 animate-marquee">
            {[...marquee, ...marquee].map((c, i) => (
              <span key={i} className="rounded-full bg-white px-4 py-2 text-[12px] font-medium text-brand ring-1 ring-brand/10 shadow-sm whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1 overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-black/5 reveal">
            <img src={collegesImg} alt="Colleges in Coimbatore" loading="lazy" width={1024} height={1024} className="w-full h-auto rounded-2xl" />
            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-brand/5 p-3">
                <div className="text-2xl font-bold text-brand">{ENGINEERING.length}+</div>
                <div className="text-[11px] text-muted-foreground">Engineering</div>
              </div>
              <div className="rounded-xl bg-accent2/10 p-3">
                <div className="text-2xl font-bold text-accent2">{ARTS.length}+</div>
                <div className="text-[11px] text-muted-foreground">Arts &amp; Science</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="reveal rounded-3xl bg-white p-6 ring-1 ring-black/5">
              <div className="flex items-center gap-2 text-brand">
                <Building2 className="h-4 w-4" />
                <h3 className="text-base font-semibold">Engineering Colleges</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-muted-foreground">
                {ENGINEERING.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-3xl bg-white p-6 ring-1 ring-black/5">
              <div className="flex items-center gap-2 text-brand">
                <BookOpen className="h-4 w-4" />
                <h3 className="text-base font-semibold">Arts &amp; Science Colleges</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-muted-foreground">
                {ARTS.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

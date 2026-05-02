import { Building2, BookOpen, MapPin, Star } from "lucide-react";
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

import { useState } from "react";

function CollegeChip({ name, kind }: { name: string; kind: "eng" | "arts" }) {
  const initials = name
    .replace(/[()&.]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="reveal group flex items-center gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-black/5 shadow-[0_4px_16px_-12px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:ring-brand/20 hover:shadow-[0_10px_28px_-14px_rgba(20,40,90,0.25)]">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[12px] font-bold ${
          kind === "eng" ? "bg-brand/10 text-brand" : "bg-accent2/15 text-accent2"
        }`}
      >
        {initials}
      </span>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-semibold text-foreground">{name}</div>
        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
          <MapPin className="h-3 w-3" /> Coimbatore
        </div>
      </div>
    </div>
  );
}

export function Colleges() {
  const [tab, setTab] = useState<"eng" | "arts">("eng");
  const list = tab === "eng" ? ENGINEERING : ARTS;

  return (
    <section id="colleges" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Our Network</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand leading-[1.05]">
              Colleges we work with
            </h2>
            <p className="mt-4 max-w-md text-[15px] text-muted-foreground">
              Direct relationships with every major engineering and arts &amp; science college in the region —
              so you get accurate cut-offs, real seat availability and trusted guidance.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 max-w-sm">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                <div className="text-2xl font-bold text-brand">{ENGINEERING.length}+</div>
                <div className="text-[11px] text-muted-foreground">Engineering</div>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                <div className="text-2xl font-bold text-accent2">{ARTS.length}+</div>
                <div className="text-[11px] text-muted-foreground">Arts &amp; Science</div>
              </div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(20,40,90,0.3)]">
            <img src={collegesImg} alt="College campuses we work with" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex items-center justify-center reveal">
          <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-black/5 shadow-sm">
            <button
              onClick={() => setTab("eng")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition ${
                tab === "eng" ? "bg-brand text-brand-foreground" : "text-foreground/70 hover:text-brand"
              }`}
            >
              <Building2 className="h-3.5 w-3.5" /> Engineering ({ENGINEERING.length})
            </button>
            <button
              onClick={() => setTab("arts")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition ${
                tab === "arts" ? "bg-accent2 text-accent2-foreground" : "text-foreground/70 hover:text-accent2"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" /> Arts &amp; Science ({ARTS.length})
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CollegeChip key={c} name={c} kind={tab} />
          ))}
        </div>

        <div className="mt-10 flex justify-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-2 text-[12px] text-brand">
            <Star className="h-3.5 w-3.5 fill-accent2 text-accent2" />
            And many more across Coimbatore region — ask us about your preferred college.
          </div>
        </div>
      </div>
    </section>
  );
}

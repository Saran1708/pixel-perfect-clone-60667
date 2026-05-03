import { Building2, BookOpen, MapPin, Star, Search } from "lucide-react";
import collegesImg from "@/assets/edzup-colleges.jpg";
import { useState } from "react";

type College = { name: string; type: "eng" | "arts" | "medical" };
type District = { colleges: College[] };

const DISTRICTS: Record<string, District> = {
  Coimbatore: {
    colleges: [
      { name: "PSG College of Technology", type: "eng" },
      { name: "Coimbatore Institute of Technology", type: "eng" },
      { name: "Amrita School of Engineering", type: "eng" },
      { name: "Sri Krishna College of Engineering & Technology", type: "eng" },
      { name: "Kumaraguru College of Technology", type: "eng" },
      { name: "Sri Krishna College of Technology", type: "eng" },
      { name: "KPR Institute of Engineering & Technology", type: "eng" },
      { name: "Karunya Institute of Technology and Sciences", type: "eng" },
      { name: "Government College of Technology", type: "eng" },
      { name: "SNS College of Engineering", type: "eng" },
      { name: "Rathinam Technical Campus", type: "eng" },
      { name: "Nehru Institute of Engineering and Technology", type: "eng" },
      { name: "Maharaja Institute of Technology", type: "eng" },
      { name: "Kalaivani College of Technology", type: "eng" },
      { name: "PSG College of Arts & Science", type: "arts" },
      { name: "Dr. N.G.P. Arts and Science College", type: "arts" },
      { name: "Sri Krishna Arts and Science College", type: "arts" },
      { name: "Sri Ramakrishna College of Arts and Science", type: "arts" },
      { name: "Hindusthan College of Arts & Science", type: "arts" },
      { name: "Rathinam College of Arts & Science", type: "arts" },
      { name: "Kongunadu Arts and Science College", type: "arts" },
      { name: "PSGR Krishnamal College for Women", type: "arts" },
      { name: "PPG College of Arts and Science", type: "arts" },
      { name: "CMS College of Science and Commerce", type: "arts" },
      { name: "Kovai Kalaimagal College of Arts and Science", type: "arts" },
      { name: "SNS Rajalakshmi College of Arts and Science", type: "arts" },
      { name: "Providence College for Women", type: "arts" },
      { name: "Nirmala College for Women", type: "arts" },
      { name: "PSG Institute of Medical Sciences & Research", type: "medical" },
      { name: "Coimbatore Medical College & Hospital", type: "medical" },
      { name: "Sri Ramakrishna Institute of Medical Sciences", type: "medical" },
      { name: "Amrita Institute of Medical Sciences", type: "medical" },
    ],
  },
  Chennai: {
    colleges: [
      { name: "College of Engineering, Guindy (Anna University)", type: "eng" },
      { name: "IIT Madras", type: "eng" },
      { name: "SRM Institute of Science and Technology", type: "eng" },
      { name: "Saveetha Engineering College", type: "eng" },
      { name: "Rajalakshmi Engineering College", type: "eng" },
      { name: "Panimalar Engineering College", type: "eng" },
      { name: "Easwari Engineering College", type: "eng" },
      { name: "Sri Venkateswara College of Engineering", type: "eng" },
      { name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute", type: "eng" },
      { name: "S. Abdur Rahman Crescent Institute of Science", type: "eng" },
      { name: "Loyola College", type: "arts" },
      { name: "Madras Christian College", type: "arts" },
      { name: "Stella Maris College", type: "arts" },
      { name: "Women's Christian College", type: "arts" },
      { name: "Presidency College", type: "arts" },
      { name: "Ethiraj College for Women", type: "arts" },
      { name: "Pachaiyappa's College", type: "arts" },
      { name: "DG Vaishnav College", type: "arts" },
      { name: "Madras Medical College", type: "medical" },
      { name: "Stanley Medical College", type: "medical" },
      { name: "Kilpauk Medical College", type: "medical" },
      { name: "Saveetha Medical College", type: "medical" },
      { name: "Sri Ramachandra Institute of Higher Education", type: "medical" },
      { name: "Chettinad Hospital & Research Institute", type: "medical" },
      { name: "Meenakshi Medical College & Research Institute", type: "medical" },
    ],
  },
  Trichy: {
    colleges: [
      { name: "NIT Tiruchirappalli", type: "eng" },
      { name: "Bharathidasan Institute of Technology", type: "eng" },
      { name: "J.J. College of Engineering & Technology", type: "eng" },
      { name: "K. Ramakrishnan College of Engineering", type: "eng" },
      { name: "M.A.M. College of Engineering", type: "eng" },
      { name: "Saranathan College of Engineering", type: "eng" },
      { name: "Bishop Heber College", type: "arts" },
      { name: "Jamal Mohamed College", type: "arts" },
      { name: "St. Joseph's College", type: "arts" },
      { name: "National College", type: "arts" },
      { name: "Cauvery College for Women", type: "arts" },
      { name: "Urumu Dhanalakshmi College", type: "arts" },
      { name: "Shrimati Indira Gandhi College", type: "arts" },
      { name: "Mahatma Gandhi Memorial Medical College", type: "medical" },
      { name: "Trichy SRM Medical College Hospital & Research Centre", type: "medical" },
    ],
  },
  Madurai: {
    colleges: [
      { name: "Thiagarajar College of Engineering", type: "eng" },
      { name: "Mepco Schlenk Engineering College", type: "eng" },
      { name: "Madurai Institute of Engineering and Technology", type: "eng" },
      { name: "K.L.N. College of Engineering", type: "eng" },
      { name: "Fatima College", type: "arts" },
      { name: "American College", type: "arts" },
      { name: "Lady Doak College", type: "arts" },
      { name: "The Madura College", type: "arts" },
      { name: "Yadava College", type: "arts" },
      { name: "Sourashtra College", type: "arts" },
      { name: "Mannar Thirumalai Naicker College", type: "arts" },
      { name: "Government Arts College, Madurai", type: "arts" },
      { name: "Madurai Medical College", type: "medical" },
      { name: "Velammal Medical College Hospital & Research Institute", type: "medical" },
      { name: "Meenakshi Mission Hospital & Research Centre", type: "medical" },
    ],
  },
  Salem: {
    colleges: [
      { name: "Government College of Engineering, Salem", type: "eng" },
      { name: "Bannari Amman Institute of Technology", type: "eng" },
      { name: "Salem College of Engineering & Technology", type: "eng" },
      { name: "Mahendra Engineering College", type: "eng" },
      { name: "AVS Engineering College", type: "eng" },
      { name: "Annai Mathammal Sheela Engineering College", type: "eng" },
      { name: "Salem Sowdeswari College", type: "arts" },
      { name: "Government Arts College, Salem", type: "arts" },
      { name: "Mahendra Arts and Science College", type: "arts" },
      { name: "Pavai College of Arts and Science", type: "arts" },
      { name: "Vinayaka Mission's Kirupananda Variyar Arts & Science", type: "arts" },
      { name: "Vinayaka Mission's Medical College, Salem", type: "medical" },
      { name: "Dhanalakshmi Srinivasan Medical College", type: "medical" },
    ],
  },
  Vellore: {
    colleges: [
      { name: "VIT Vellore", type: "eng" },
      { name: "Thiruvalluvar University Engineering College", type: "eng" },
      { name: "Periyar Maniammai Institute of Science & Technology", type: "eng" },
      { name: "Auxilium College for Women", type: "arts" },
      { name: "Voorhees College", type: "arts" },
      { name: "Government Arts College, Vellore", type: "arts" },
      { name: "DKM College for Women", type: "arts" },
      { name: "Christian Medical College (CMC)", type: "medical" },
      { name: "Sri Narayani Hospital & Research Centre", type: "medical" },
    ],
  },
  Tirunelveli: {
    colleges: [
      { name: "Francis Xavier Engineering College", type: "eng" },
      { name: "SCAD College of Engineering & Technology", type: "eng" },
      { name: "Noorul Islam Centre for Higher Education", type: "eng" },
      { name: "PSN College of Engineering & Technology", type: "eng" },
      { name: "St. Xavier's College", type: "arts" },
      { name: "Sarah Tucker College for Women", type: "arts" },
      { name: "Rani Anna Government College for Women", type: "arts" },
      { name: "V.O.C. College of Arts and Science", type: "arts" },
      { name: "Tirunelveli Medical College", type: "medical" },
      { name: "SCAD Medical College", type: "medical" },
    ],
  },
  Erode: {
    colleges: [
      { name: "Government College of Engineering, Erode", type: "eng" },
      { name: "Erode Sengunthar Engineering College", type: "eng" },
      { name: "Knowledge Institute of Technology", type: "eng" },
      { name: "Nandha Engineering College", type: "eng" },
      { name: "Kongu Arts and Science College", type: "arts" },
      { name: "Erode Arts and Science College", type: "arts" },
      { name: "Chikkanna Government Arts College", type: "arts" },
      { name: "Cauvery College of Arts and Science", type: "arts" },
      { name: "Nandha Medical College & Hospital", type: "medical" },
    ],
  },
  Thanjavur: {
    colleges: [
      { name: "SASTRA Deemed University", type: "eng" },
      { name: "Arasu Engineering College", type: "eng" },
      { name: "Pavendar Bharathidasan College of Engineering", type: "eng" },
      { name: "Rajah Serfoji Government College", type: "arts" },
      { name: "Government Arts College, Thanjavur", type: "arts" },
      { name: "Holy Cross College", type: "arts" },
      { name: "SVN College", type: "arts" },
      { name: "Thanjavur Medical College", type: "medical" },
    ],
  },
  Namakkal: {
    colleges: [
      { name: "Gnanamani College of Engineering", type: "eng" },
      { name: "Mahendra College of Engineering", type: "eng" },
      { name: "E.G.S. Pillay Engineering College", type: "eng" },
      { name: "Pallavan College of Engineering", type: "eng" },
      { name: "Gnanamani College of Arts and Science", type: "arts" },
      { name: "Annai College of Arts and Science", type: "arts" },
      { name: "Government Arts College, Namakkal", type: "arts" },
      { name: "Muthayammal College of Arts and Science", type: "arts" },
    ],
  },
  Dindigul: {
    colleges: [
      { name: "Gandhigram Rural Institute", type: "eng" },
      { name: "Dindigul College of Engineering and Technology", type: "eng" },
      { name: "A.R. Engineering College", type: "eng" },
      { name: "Sree Sowdambika College of Engineering", type: "eng" },
      { name: "Government Arts College, Dindigul", type: "arts" },
      { name: "Vivekananda College of Arts and Sciences for Women", type: "arts" },
      { name: "Bishop Ambrose College", type: "arts" },
    ],
  },
  Kanchipuram: {
    colleges: [
      { name: "Sri Venkateswara College of Engineering", type: "eng" },
      { name: "Jeppiaar Engineering College", type: "eng" },
      { name: "Aarupadai Veedu Institute of Technology", type: "eng" },
      { name: "Vel Tech Engineering College", type: "eng" },
      { name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya", type: "arts" },
      { name: "Balaji Medical College & Hospital", type: "medical" },
      { name: "Meenakshi Medical College (Kanchipuram)", type: "medical" },
    ],
  },
  Tiruppur: {
    colleges: [
      { name: "Park College of Engineering and Technology", type: "eng" },
      { name: "Kalaivani College of Technology", type: "eng" },
      { name: "Angel College of Engineering and Technology", type: "eng" },
      { name: "Maharaja Institute of Technology", type: "eng" },
      { name: "PPG College of Arts and Science", type: "arts" },
      { name: "Tiruppur Kumaran College for Women", type: "arts" },
      { name: "Sri Ramakrishna College of Arts and Science, Tiruppur", type: "arts" },
    ],
  },
  Villupuram: {
    colleges: [
      { name: "Mailam Engineering College", type: "eng" },
      { name: "Priyadarshini Engineering College", type: "eng" },
      { name: "Annai Vailankanni College of Engineering", type: "eng" },
      { name: "Government Arts College, Villupuram", type: "arts" },
      { name: "Tagore College of Arts and Science", type: "arts" },
      { name: "Rajiv Gandhi Arts and Science College", type: "arts" },
    ],
  },
  Cuddalore: {
    colleges: [
      { name: "Annamalai University (Engineering)", type: "eng" },
      { name: "Vivekananda College of Engineering & Technology", type: "eng" },
      { name: "Annamalai University (Arts & Science)", type: "arts" },
      { name: "Government Arts College, Cuddalore", type: "arts" },
      { name: "Kandaswami Kandar's College", type: "arts" },
      { name: "Rajah Muthiah Medical College (Annamalai University)", type: "medical" },
    ],
  },
};

const DISTRICT_NAMES = Object.keys(DISTRICTS).sort();

const TYPE_META = {
  eng:     { label: "Engineering",   bg: "bg-brand/10",       text: "text-brand"       },
  arts:    { label: "Arts & Science", bg: "bg-accent2/15",    text: "text-accent2"     },
  medical: { label: "Medical",        bg: "bg-green-100",     text: "text-green-700"   },
};

function getInitials(name: string) {
  return name
    .replace(/[()&.,]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CollegeCard({ college }: { college: College }) {
  const meta = TYPE_META[college.type];
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-black/5 shadow-[0_4px_16px_-12px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:ring-brand/20 hover:shadow-[0_10px_28px_-14px_rgba(20,40,90,0.25)] overflow-hidden">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[12px] font-bold ${meta.bg} ${meta.text}`}>
        {getInitials(college.name)}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-semibold text-foreground leading-snug break-words">{college.name}</div>
        <div className={`mt-0.5 text-[10px] font-semibold ${meta.text}`}>{meta.label}</div>
      </div>
    </div>
  );
}

export function Colleges() {
  const [tab, setTab] = useState<"eng" | "arts">("eng");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Coimbatore");
  const [filter, setFilter] = useState<"all" | "eng" | "arts" | "medical">("all");
  const [search, setSearch] = useState("");

  const districtColleges = DISTRICTS[selectedDistrict]?.colleges ?? [];
  const filtered = districtColleges.filter((c) => {
    const matchType = filter === "all" || c.type === filter;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const engCount     = districtColleges.filter((c) => c.type === "eng").length;
  const artsCount    = districtColleges.filter((c) => c.type === "arts").length;
  const medCount     = districtColleges.filter((c) => c.type === "medical").length;

  // original top tab list (non-district)
  const ENGINEERING_LIST = DISTRICTS["Coimbatore"].colleges.filter(c => c.type === "eng").map(c => c.name);
  const ARTS_LIST = DISTRICTS["Coimbatore"].colleges.filter(c => c.type === "arts").map(c => c.name);

  return (
    <section id="colleges" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* ── Hero: left content + right image ── */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Our Network</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand leading-[1.05]">
              Colleges we work with
            </h2>
            <p className="mt-4 max-w-md text-[15px] text-muted-foreground">
              Direct relationships with colleges across Tamil Nadu — engineering, arts & science, medical, and abroad.
              We give you accurate cut-offs, real seat availability and trusted guidance.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-sm">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                <div className="text-2xl font-bold text-brand">100+</div>
                <div className="text-[11px] text-muted-foreground">Engineering</div>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                <div className="text-2xl font-bold text-accent2">150+</div>
                <div className="text-[11px] text-muted-foreground">Arts & Science</div>
              </div>
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-[11px] text-muted-foreground">Medical</div>
              </div>
            </div>
            <div className="mt-3 rounded-2xl bg-accent2/5 p-4 ring-1 ring-accent2/20">
              <div className="text-[13px] font-semibold text-accent2">🌍 Abroad Colleges</div>
              <div className="text-[12px] text-muted-foreground mt-1">Expert guidance for international education opportunities</div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(20,40,90,0.3)]">
            <img src={collegesImg} alt="College campuses we work with" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* ── District selector ── */}
        <div className="mt-16 reveal">
          <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Browse by district
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {DISTRICT_NAMES.map((d) => (
              <button
                key={d}
                onClick={() => { setSelectedDistrict(d); setFilter("all"); setSearch(""); }}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-semibold transition border ${
                  selectedDistrict === d
                    ? "bg-brand text-brand-foreground border-brand shadow-sm"
                    : "bg-white text-foreground/70 border-black/10 hover:border-brand/30 hover:text-brand"
                }`}
              >
                <MapPin className="h-3 w-3" /> {d}
              </button>
            ))}
          </div>
        </div>

        {/* ── College panel ── */}
        <div className="mt-6 rounded-3xl bg-muted/40 ring-1 ring-black/5 overflow-hidden reveal">
          {/* Panel header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 bg-white border-b border-black/5">
            <div>
              <h3 className="text-[15px] font-bold text-brand flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent2" /> {selectedDistrict}
              </h3>
             
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="pl-8 pr-3 py-1.5 text-[12px] rounded-full border border-black/10 bg-background outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 w-28"
                />
              </div>
              {/* Type filter pills */}
              <div className="inline-flex rounded-full bg-muted p-0.5 gap-0.5">
                {(["all", "eng", "arts", "medical"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                      filter === f ? "bg-white text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f === "all" ? "All" : f === "eng" ? "Engg" : f === "arts" ? "Arts" : "Medical"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* College grid */}
          <div className="p-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length > 0 ? (
              filtered.map((c) => <CollegeCard key={c.name} college={c} />)
            ) : (
              <div className="col-span-full py-12 text-center text-[13px] text-muted-foreground">
                No colleges found for this filter.
              </div>
            )}
          </div>
        </div>

        {/* ── Footer note ── */}
        <div className="mt-8 flex justify-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-2 text-[12px] text-brand">
            <Star className="h-3.5 w-3.5 fill-accent2 text-accent2" />
            And many more across Tamil Nadu — ask us about your preferred college.
          </div>
        </div>

      </div>
    </section>
  );
}
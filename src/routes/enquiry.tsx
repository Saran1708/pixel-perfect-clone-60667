import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, User, GraduationCap, Users as UsersIcon, ListChecks } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/enquiry")({
  component: EnquiryPage,
});

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAnWbUAefY4PbZm_38_sBnk5FhUcAjv8L5bdwLgDX3EhJRY9SFXoTmeIiEg5b_8l67TQ/exec";
const STORAGE_KEY = "edzup_enquiry_draft_v1";

type FormState = {
  studentName: string;
  dob: string;
  mobile: string;
  address: string;
  registerNo: string;
  totalMarks: string;
  subjects: string;
  yearOfPassing: string;
  marks10: string;
  lastSchool: string;
  community: string;
  subCaste: string;
  courseInterest: string;
  preferredCollege: string;
};

const EMPTY: FormState = {
  studentName: "", dob: "", mobile: "", address: "",
  registerNo: "", totalMarks: "", subjects: "", yearOfPassing: "", marks10: "", lastSchool: "",
  community: "", subCaste: "",
  courseInterest: "", preferredCollege: "",
};

const OPTIONAL_FIELDS = new Set<keyof FormState>(["registerNo", "subCaste", "totalMarks"]);

const DROPDOWN_FIELDS = new Set<keyof FormState>(["subjects", "community"]);

const SUBJECT_OPTIONS = [
  // Group 1 – Engineering / Computer Science / Maths Focus
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Computer Science" },
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Biology (Bio-Maths)" },
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Statistics" },
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Biochemistry" },
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Communicative English" },
  { group: "Group 1 – Engineering / Computer Science / Maths", value: "Physics + Chemistry + Mathematics + Home Science" },
  // Group 2 – Medical / Biology Focus
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Computer Science" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Micro Biology" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Biochemistry" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Nursing" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Nutrition & Dietetics" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Biology + Home Science" },
  { group: "Group 2 – Medical / Biology Focus", value: "Physics + Chemistry + Botany + Zoology" },
  // Group 3 – Commerce / Business Focus
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + Business Maths" },
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + Computer Applications" },
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + Statistics" },
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + Commercial Geography" },
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + Office Management" },
  { group: "Group 3 – Commerce / Business Focus", value: "Commerce + Accountancy + Economics + History" },
  // Group 4 – Arts / Humanities Focus
  { group: "Group 4 – Arts / Humanities Focus", value: "History + Geography + Political Science + Economics" },
  { group: "Group 4 – Arts / Humanities Focus", value: "History + Economics + Commerce" },
  { group: "Group 4 – Arts / Humanities Focus", value: "Sociology + Psychology + Economics" },
  { group: "Group 4 – Arts / Humanities Focus", value: "Political Science + History + Geography" },
  { group: "Group 4 – Arts / Humanities Focus", value: "Tamil + English + History + Economics" },
  { group: "Group 4 – Arts / Humanities Focus", value: "Home Science + Nutrition + Family Resource Management" },
  { group: "Others", value: "Others" },
];

const COMMUNITY_OPTIONS = ["OC", "FC", "BC", "BCM", "MBC", "DNC", "DC", "SC", "SCA", "ST", "Others"];

const SECTIONS = [
  { id: 1, label: "Personal", icon: User, fields: ["studentName", "dob", "mobile", "address"] as (keyof FormState)[] },
  { id: 2, label: "Academic", icon: GraduationCap, fields: ["registerNo", "totalMarks", "subjects", "yearOfPassing", "marks10", "lastSchool"] as (keyof FormState)[] },
  { id: 3, label: "Community", icon: UsersIcon, fields: ["community", "subCaste"] as (keyof FormState)[] },
  { id: 4, label: "Preference", icon: ListChecks, fields: ["courseInterest", "preferredCollege"] as (keyof FormState)[] },
];

const LABELS: Record<keyof FormState, { label: string; type?: string; placeholder?: string; textarea?: boolean }> = {
  studentName: { label: "Student Name", placeholder: "Full name as per certificate" },
  dob: { label: "Date of Birth", type: "date" },
  mobile: { label: "Mobile Number", type: "tel", placeholder: "10-digit mobile" },
  address: { label: "Address", textarea: true, placeholder: "Door no, street, city, pincode" },
  registerNo: { label: "+2 Register No. (optional)", placeholder: "Board register number" },
  totalMarks: { label: "+2 Total Marks (optional)", placeholder: "e.g. 1145" },
  subjects: { label: "+2 Subject Group", placeholder: "Select your subject group" },
  yearOfPassing: { label: "+2 Year of Passing", placeholder: "e.g. 2024" },
  marks10: { label: "10th Marks", placeholder: "Total / Percentage" },
  lastSchool: { label: "Last Studied School", placeholder: "School name & place" },
  community: { label: "Community", placeholder: "Select community" },
  subCaste: { label: "Sub-Caste (optional)", placeholder: "Sub-caste / community detail" },
  courseInterest: { label: "Course Interested In", placeholder: "e.g. B.E. CSE / B.Sc CS / B.Com" },
  preferredCollege: { label: "Preferred College", placeholder: "Top choice (you can change later)" },
};

const selectClass = "mt-1.5 w-full rounded-xl border border-black/10 bg-background px-4 py-2.5 text-[14px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15 appearance-none cursor-pointer";
const inputClass = "mt-1.5 w-full rounded-xl border border-black/10 bg-background px-4 py-2.5 text-[14px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15";

function EnquiryPage() {
  useReveal();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (submitted) return;
    const top = formTopRef.current?.getBoundingClientRect().top ?? 0;
    const y = window.scrollY + top - 110;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [step, submitted]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.data) setData({ ...EMPTY, ...parsed.data });
        if (parsed?.step) setStep(parsed.step);
      }
    } catch { }
  }, []);

  useEffect(() => {
    if (submitted) return;
    const id = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step, ts: Date.now() }));
      } catch { }
    }, 600);
    return () => clearTimeout(id);
  }, [data, step, submitted]);

  const update = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  const currentSection = SECTIONS[step - 1];
  const isStepValid = currentSection.fields
    .filter((f) => !OPTIONAL_FIELDS.has(f))
    .every((f) => data[f].trim().length > 0);

  const handleNext = () => {
    if (step < SECTIONS.length) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      try { localStorage.removeItem(STORAGE_KEY); } catch { }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setData(EMPTY); setStep(1); setSubmitted(false);
    try { localStorage.removeItem(STORAGE_KEY); } catch { }
  };

  const progress = ((step - 1) / SECTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-16 md:pt-36 md:pb-20 pointer-events-auto">
        {submitted ? (
          <SuccessCard onReset={handleReset} name={data.studentName} />
        ) : (
          <>
            <div ref={formTopRef} className="text-center animate-fade-up scroll-mt-28">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Admission Enquiry</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-brand">Tell us about you</h1>
              <p className="mt-3 text-[14px] text-muted-foreground">
                A short, step-by-step form — takes about 3 minutes.
              </p>
            </div>

            {/* Stepper */}
            <div className="mt-9 rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="flex items-center justify-between">
                {SECTIONS.map((s, i) => {
                  const active = step === s.id;
                  const done = step > s.id;
                  return (
                    <div key={s.id} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center text-center">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold transition
                          ${done ? "bg-accent2 text-accent2-foreground" : active ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground"}`}>
                          {done ? <CheckCircle2 className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                        </span>
                        <span className={`mt-1.5 text-[11px] font-medium ${active ? "text-brand" : "text-muted-foreground"}`}>{s.label}</span>
                      </div>
                      {i < SECTIONS.length - 1 && (
                        <div className="mx-2 h-[2px] flex-1 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full transition-all duration-500 ${done ? "w-full bg-accent2" : "w-0 bg-accent2"}`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-brand transition-all duration-500" style={{ width: `${progress + 100 / SECTIONS.length}%` }} />
              </div>
            </div>

            {/* Active section */}
            <section className="mt-6 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-black/5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <currentSection.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Section {step} of {SECTIONS.length}</p>
                  <h2 className="text-xl font-semibold">{currentSection.label} details</h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {currentSection.fields.map((f) => {
                  const meta = LABELS[f];
                  const isDropdown = DROPDOWN_FIELDS.has(f);

                  return (
                    <div key={f} className={meta.textarea || f === "subjects" ? "sm:col-span-2" : ""}>
                      <label className="text-[12px] font-semibold text-foreground/80">
                        {meta.label}
                      </label>

                      {/* Subjects dropdown — grouped by category */}
                      {f === "subjects" ? (
                        <div className="relative">
                          <select
                            value={data[f]}
                            onChange={(e) => update(f, e.target.value)}
                            className={selectClass}
                          >
                            <option value="">— Select subject group —</option>
                            {(() => {
                              const groups = [...new Set(SUBJECT_OPTIONS.map((o) => o.group))];
                              return groups.map((g) => (
                                <optgroup key={g} label={g}>
                                  {SUBJECT_OPTIONS.filter((o) => o.group === g).map((o) => (
                                    <option key={o.value} value={o.value}>{o.value}</option>
                                  ))}
                                </optgroup>
                              ));
                            })()}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-[10px]">▼</span>
                        </div>
                      ) : f === "community" ? (
                        /* Community dropdown */
                        <div className="relative">
                          <select
                            value={data[f]}
                            onChange={(e) => update(f, e.target.value)}
                            className={selectClass}
                          >
                            <option value="">— Select community —</option>
                            {COMMUNITY_OPTIONS.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-[10px]">▼</span>
                        </div>
                      ) : meta.textarea ? (
                        <textarea
                          rows={3}
                          value={data[f]}
                          onChange={(e) => update(f, e.target.value)}
                          placeholder={meta.placeholder}
                          className={inputClass}
                        />
                      ) : (
                        <input
                          type={meta.type ?? "text"}
                          value={data[f]}
                          onChange={(e) => update(f, e.target.value)}
                          placeholder={meta.placeholder}
                          className={inputClass}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1 || submitting}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold text-foreground/80 disabled:opacity-40 hover:bg-muted transition"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid || submitting}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand py-2.5 pl-5 pr-1.5 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  {submitting ? "Submitting..." : step === SECTIONS.length ? "Submit enquiry" : "Continue"}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent2 text-accent2-foreground transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </section>

            <p className="mt-6 text-center text-[12px] text-muted-foreground">
              Need help? Call or WhatsApp <a className="text-brand font-semibold" href="tel:9994538133">9994538133</a>
            </p>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

function SuccessCard({ onReset, name }: { onReset: () => void; name: string }) {
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgba(20,40,90,0.25)] animate-fade-up">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h2 className="mt-6 text-2xl md:text-3xl font-bold text-brand">Enquiry submitted successfully</h2>
      <p className="mt-3 text-[14px] text-muted-foreground">
        Thank you{name ? `, ${name.split(" ")[0]}` : ""}! Our team will reach out to you on the mobile number you provided.
        Meanwhile, you can WhatsApp us anytime on <a className="text-brand font-semibold" href="https://wa.me/919994538133">9994538133</a>.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-brand py-2.5 px-5 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 transition">
          Back to home
        </Link>
        <button onClick={onReset} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white py-2.5 px-5 text-[13px] font-semibold text-foreground/80 hover:bg-muted transition">
          Submit another
        </button>
      </div>
    </div>
  );
}
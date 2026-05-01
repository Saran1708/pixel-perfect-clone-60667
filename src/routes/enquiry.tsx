import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Save, User, GraduationCap, Users as UsersIcon, ListChecks } from "lucide-react";
import logo from "@/assets/edzup-logo.png";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Admission Enquiry — EDZUP" },
      { name: "description", content: "Apply for free admission guidance with EDZUP. Quick step-by-step enquiry form." },
    ],
  }),
  component: EnquiryPage,
});

const STORAGE_KEY = "edzup_enquiry_draft_v1";

type FormState = {
  // Section 1
  studentName: string;
  dob: string;
  mobile: string;
  address: string;
  // Section 2
  registerNo: string;
  totalMarks: string;
  subjects: string;
  marks11: string;
  marks10: string;
  lastSchool: string;
  // Section 3
  community: string;
  subCaste: string;
  // Section 4
  courseInterest: string;
  preferredCollege: string;
};

const EMPTY: FormState = {
  studentName: "", dob: "", mobile: "", address: "",
  registerNo: "", totalMarks: "", subjects: "", marks11: "", marks10: "", lastSchool: "",
  community: "", subCaste: "",
  courseInterest: "", preferredCollege: "",
};

const SECTIONS = [
  { id: 1, label: "Personal", icon: User, fields: ["studentName", "dob", "mobile", "address"] as (keyof FormState)[] },
  { id: 2, label: "Academic", icon: GraduationCap, fields: ["registerNo", "totalMarks", "subjects", "marks11", "marks10", "lastSchool"] as (keyof FormState)[] },
  { id: 3, label: "Community", icon: UsersIcon, fields: ["community", "subCaste"] as (keyof FormState)[] },
  { id: 4, label: "Preference", icon: ListChecks, fields: ["courseInterest", "preferredCollege"] as (keyof FormState)[] },
];

const LABELS: Record<keyof FormState, { label: string; type?: string; placeholder?: string; textarea?: boolean }> = {
  studentName: { label: "Student Name", placeholder: "Full name as per certificate" },
  dob: { label: "Date of Birth", type: "date" },
  mobile: { label: "Mobile Number", type: "tel", placeholder: "10-digit mobile" },
  address: { label: "Address", textarea: true, placeholder: "Door no, street, city, pincode" },
  registerNo: { label: "+2 Register No.", placeholder: "Board register number" },
  totalMarks: { label: "+2 Total Marks", placeholder: "e.g. 1145" },
  subjects: { label: "+2 Subjects", placeholder: "e.g. Physics, Chemistry, Maths, Biology, English" },
  marks11: { label: "11th Marks", placeholder: "Total / Percentage" },
  marks10: { label: "10th Marks", placeholder: "Total / Percentage" },
  lastSchool: { label: "Last Studied School", placeholder: "School name & place" },
  community: { label: "Community", placeholder: "OC / BC / MBC / SC / ST" },
  subCaste: { label: "Sub-Caste", placeholder: "Sub-caste / community detail" },
  courseInterest: { label: "Course Interested In", placeholder: "e.g. B.E. CSE / B.Sc CS / B.Com" },
  preferredCollege: { label: "Preferred College", placeholder: "Top choice (you can change later)" },
};

function EnquiryPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.data) setData({ ...EMPTY, ...parsed.data });
        if (parsed?.step) setStep(parsed.step);
      }
    } catch {}
  }, []);

  // Save draft on every change
  useEffect(() => {
    if (submitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step, ts: Date.now() }));
      setSavedAt(Date.now());
    } catch {}
  }, [data, step, submitted]);

  const update = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  const currentSection = SECTIONS[step - 1];
  const isStepValid = currentSection.fields.every((f) => data[f].trim().length > 0);

  const handleNext = () => {
    if (step < SECTIONS.length) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    // simulate submit; could be wired to backend later
    setSubmitted(true);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setData(EMPTY); setStep(1); setSubmitted(false);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const progress = ((step - 1) / SECTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Mini header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-black/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <img src={logo} alt="EDZUP" className="h-7 w-auto" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        {submitted ? (
          <SuccessCard onReset={handleReset} name={data.studentName} />
        ) : (
          <>
            <div className="text-center animate-fade-up">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-accent2">Admission Enquiry</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-brand">Tell us about you</h1>
              <p className="mt-3 text-[14px] text-muted-foreground">
                A short, step-by-step form. Your progress saves automatically — you can come back anytime.
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
            <section key={step} className="mt-6 rounded-2xl bg-white p-6 md:p-8 ring-1 ring-black/5 shadow-sm animate-fade-up">
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
                  return (
                    <div key={f} className={meta.textarea ? "sm:col-span-2" : ""}>
                      <label className="text-[12px] font-semibold text-foreground/80">{meta.label}</label>
                      {meta.textarea ? (
                        <textarea
                          rows={3}
                          value={data[f]}
                          onChange={(e) => update(f, e.target.value)}
                          placeholder={meta.placeholder}
                          className="mt-1.5 w-full rounded-xl border border-black/10 bg-background px-4 py-2.5 text-[14px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                        />
                      ) : (
                        <input
                          type={meta.type ?? "text"}
                          value={data[f]}
                          onChange={(e) => update(f, e.target.value)}
                          placeholder={meta.placeholder}
                          className="mt-1.5 w-full rounded-xl border border-black/10 bg-background px-4 py-2.5 text-[14px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
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
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold text-foreground/80 disabled:opacity-40 hover:bg-muted transition"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Save className="h-3 w-3" />
                  {savedAt ? "Draft saved" : "Saving…"}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand py-2.5 pl-5 pr-1.5 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  {step === SECTIONS.length ? "Submit enquiry" : "Continue"}
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
    </div>
  );
}

function SuccessCard({ onReset, name }: { onReset: () => void; name: string }) {
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgba(20,40,90,0.25)] animate-fade-up">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent2/15 text-accent2">
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

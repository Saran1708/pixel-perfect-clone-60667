import { Clock, PlayCircle, Star, ArrowRight } from "lucide-react";
import comm from "@/assets/course-comm.jpg";
import aws from "@/assets/course-aws.jpg";
import data from "@/assets/course-data.jpg";

const COURSES = [
  { img: comm, title: "Communication & soft skills", price: "380.50", old: "420.50" },
  { img: aws, title: "Cloud computing with AWS", price: "350.50", old: "420.50" },
  { img: data, title: "Data analytics professional", price: "380.50", old: "420.50" },
];

export function Courses() {
  return (
    <section id="course" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-6xl font-black">Our featured courses</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COURSES.map((c) => (
            <article key={c.title} className="rounded-3xl bg-white p-3 ring-1 ring-black/5 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.2)]">
              <div className="overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="px-3 pt-5 pb-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />20 hours 30 min</span>
                  <span className="flex items-center gap-1.5"><PlayCircle className="h-4 w-4" />25 Lessons</span>
                  <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />5.0</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <hr className="my-5 border-dashed" />
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black">$ {c.price} USD</span>
                  <span className="text-muted-foreground line-through">$ {c.old} USD</span>
                </div>
                <hr className="my-5 border-dashed" />
                <button className="group flex w-full items-center justify-center gap-2 rounded-full border border-black/15 py-3 text-sm font-bold hover:bg-black hover:text-white transition">
                  VIEW COURSE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

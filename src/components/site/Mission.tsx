import missionImg from "@/assets/mission-man.jpg";

export function Mission() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img src={missionImg} alt="Mission" loading="lazy" width={900} height={700} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Mission &amp; Vision</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black leading-[1.05]">
            To empower anyone to start, grow, and scale
          </h2>
          <p className="mt-6 text-muted-foreground">
            From course pages to sales funnels to learning dashboards every element is built to attract learners.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To be the go-to growth partner for bold, forward-thinking companies worldwide
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Our Vission</h3>
              <p className="mt-3 text-muted-foreground">
                We envision a future where brands connect more meaningfully with people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

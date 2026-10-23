import { createFileRoute, Link } from "@tanstack/react-router";
import { Cta, meta, projects } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("OrbitSites — Web design studio", "OrbitSites designs and builds fast, thoughtful websites for small businesses."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-28">
        <p className="eyebrow">Web design & development — est. 2022</p>
        <h1 className="display mt-6 text-6xl md:text-[9rem]">
          Websites with <em className="text-accent">gravity.</em>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-md text-lg text-muted-foreground">
            We're a small studio that builds sites people actually remember — and that quietly bring in work for the businesses behind them.
          </p>
          <Cta to="/contact">Start a project</Cta>
        </div>
      </section>

      <section className="border-y">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[["40+", "sites launched"], ["3 wks", "typical build"], ["98", "avg. speed score"], ["1", "point of contact"]].map(([n, l]) => (
            <div key={l} className="border-r p-6 last:border-r-0 md:p-8">
              <div className="display text-4xl md:text-5xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between">
          <h2 className="display text-4xl md:text-6xl">Recent work</h2>
          <Link to="/work" className="link-underline text-sm">All projects →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Link to="/work" key={p.name} className="group block">
              <div className={`${p.tone} aspect-[4/3] overflow-hidden rounded-md p-6`}>
                <div className="h-full w-full rounded-sm bg-card shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex gap-1.5 border-b p-3">
                    <span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" />
                  </div>
                  <div className="p-6"><div className="display text-3xl">{p.name}</div><div className="mt-3 h-2 w-2/3 rounded bg-muted" /><div className="mt-2 h-2 w-1/2 rounded bg-muted" /></div>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm"><span>{p.name} — {p.type}</span><span className="text-muted-foreground">{p.year}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-10 border-t pt-12 md:grid-cols-3">
          {[
            ["01", "Listen", "A proper conversation about your business before anyone opens a design tool."],
            ["02", "Design", "Layouts drawn for your customers, not lifted from a template library."],
            ["03", "Build & care", "Hand-built, fast, and looked after once it's live."],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span className="text-sm text-accent">{n}</span>
              <h3 className="display mt-2 text-3xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

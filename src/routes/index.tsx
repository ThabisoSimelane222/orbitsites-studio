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
          {[["10+", "sites launched"], ["1–3 days", "typical build"], ["98", "avg. speed score"], ["1", "point of contact"]].map(([n, l]) => (
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
            <a href={p.url} target="_blank" rel="noreferrer" key={p.name} className="group block">
              <div className="overflow-hidden rounded-md border bg-card shadow-sm">
                <img
                  src={p.shot}
                  alt={`${p.name} website`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex justify-between gap-4 text-sm">
                <span>{p.name} — {p.type}</span>
                <span className="shrink-0 text-muted-foreground">{p.domain} ↗</span>
              </div>
            </a>
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

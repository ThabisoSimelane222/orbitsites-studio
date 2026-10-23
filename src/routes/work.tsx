import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHead, projects } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () =>
    meta(
      "Work — OrbitSites",
      "Recent website projects designed and built by OrbitSites: Hotboxx, Flipaholics SA, Urban Field Guest House and more.",
    ),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title={
          <>
            Sites we're <em className="text-accent">proud of.</em>
          </>
        }
      >
        Seven recent builds — the ones already on their own domain come first, then the builds still on a preview
        address. Every one is hand-coded for the business behind it.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-16 px-5 pb-24 md:grid-cols-2">
        {projects.map((p, i) => {
          const last = i === projects.length - 1;
          return (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`group block ${i % 2 ? "md:mt-24" : ""} ${last ? "md:col-span-2" : ""}`}
          >
            <div className="overflow-hidden rounded-md border bg-card shadow-sm">
              <img
                src={p.shot}
                alt={`${p.name} website`}
                width={1280}
                height={720}
                loading="lazy"
                className={`aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] ${last ? "md:aspect-[21/9]" : ""}`}
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="display text-3xl">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.type} · {p.place}
                </p>
              </div>
              <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {p.tag}
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{p.blurb}</p>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm">
              <span className="link-underline">{p.domain} ↗</span>
              <span className="shrink-0 text-xs text-muted-foreground">{p.stage}</span>
            </div>
          </a>
          );
        })}
      </section>
    </>
  );
}

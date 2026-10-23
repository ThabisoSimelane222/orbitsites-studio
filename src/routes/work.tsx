import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHead, projects } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => meta("Work — OrbitSites", "Selected website projects designed and built by OrbitSites."),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHead eyebrow="Selected work" title={<>Sites we're <em className="text-accent">proud of.</em></>} />
      <section className="mx-auto grid max-w-6xl gap-x-6 gap-y-14 px-5 pb-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.name} className={i % 2 ? "md:mt-24" : ""}>
            <div className={`${p.tone} aspect-[4/5] rounded-md p-8`}>
              <div className="flex h-full flex-col justify-between rounded-sm bg-card p-6 shadow-sm">
                <span className="eyebrow">{p.tag}</span>
                <span className="display text-5xl">{p.name}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-b pb-3">
              <h2 className="font-medium">{p.name}</h2>
              <span className="text-sm text-muted-foreground">{p.type} · {p.year}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

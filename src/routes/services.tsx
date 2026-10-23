import { createFileRoute } from "@tanstack/react-router";
import { Cta, meta, PageHead } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => meta("Services — OrbitSites", "Website design, development, e-commerce and ongoing care from OrbitSites."),
  component: Services,
});

const services = [
  ["Website design", "Custom layouts, type and colour built around your brand. No templates.", "From $1,200"],
  ["Development", "Fast, accessible sites you can edit yourself without breaking anything.", "From $1,800"],
  ["Online shops", "Product pages, checkout and payments set up so you can start selling.", "From $2,500"],
  ["Care plans", "Updates, backups, small edits and a real person to email when you need help.", "$90 / month"],
];

function Services() {
  return (
    <>
      <PageHead eyebrow="Services" title={<>What we do, <em className="text-accent">plainly.</em></>}>
        Four things, done properly. Most projects combine a couple of them.
      </PageHead>
      <section className="mx-auto max-w-6xl px-5 pb-24">
        {services.map(([t, d, p], i) => (
          <div key={t} className="grid gap-3 border-t py-8 md:grid-cols-[60px_1fr_1.2fr_auto] md:items-baseline md:gap-8">
            <span className="text-sm text-muted-foreground">0{i + 1}</span>
            <h2 className="display text-3xl md:text-4xl">{t}</h2>
            <p className="text-muted-foreground">{d}</p>
            <span className="text-sm font-medium">{p}</span>
          </div>
        ))}
        <div className="mt-12 border-t pt-12"><Cta to="/contact">Get a quote</Cta></div>
      </section>
    </>
  );
}

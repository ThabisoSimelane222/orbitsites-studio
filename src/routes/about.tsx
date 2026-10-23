import { createFileRoute } from "@tanstack/react-router";
import { Cta, meta, PageHead } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("Studio — OrbitSites", "Meet OrbitSites, a small independent web design studio."),
  component: About,
});

function About() {
  return (
    <>
      <PageHead eyebrow="The studio" title={<>Small on purpose.</>} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-2">
        <p className="display text-3xl md:text-4xl">
          OrbitSites started with one belief: a small business deserves a website as considered as the work it does.
        </p>
        <div className="space-y-5 text-muted-foreground">
          <p>We keep the studio small so you always talk to the people actually designing and building your site. No account managers, no hand-offs.</p>
          <p>We take on a handful of projects at a time, which means we can sweat the details — the spacing, the loading speed, the words on the button.</p>
          <Cta to="/contact">Work with us</Cta>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3">
          {[["Honest timelines", "We say when, and we mean it."], ["Your site, your keys", "You own everything we make."], ["Built to last", "Clean code that ages well."]].map(([t, d]) => (
            <div key={t} className="border-t border-foreground pt-4">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

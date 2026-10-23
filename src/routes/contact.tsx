import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { meta, PageHead } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — OrbitSites", "Tell OrbitSites about your project and get a reply within one working day."),
  component: Contact,
});

const field = "w-full border-0 border-b bg-transparent py-3 text-lg outline-none focus:border-accent";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHead eyebrow="Contact" title={<>Let's build <em className="text-accent">something.</em></>}>
        Tell us a little about your project. We reply within one working day.
      </PageHead>
      <section className="mx-auto grid max-w-6xl gap-16 px-5 pb-24 md:grid-cols-[1.5fr_1fr]">
        {sent ? (
          <p className="display text-4xl">Thanks — we'll be in touch soon.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
            <input required placeholder="Your name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Business / website" className={field} />
            <textarea required rows={4} placeholder="What do you need?" className={field} />
            <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              Send message →
            </button>
          </form>
        )}
        <div className="space-y-6 text-sm">
          <div><p className="eyebrow">Email</p><p className="mt-1 text-lg">hello@orbitsites.co</p></div>
          <div><p className="eyebrow">Based in</p><p className="mt-1 text-lg">Mbabane, Eswatini — working worldwide</p></div>
          <div><p className="eyebrow">Hours</p><p className="mt-1 text-lg">Mon–Fri, 8:00–17:00</p></div>
        </div>
      </section>
    </>
  );
}

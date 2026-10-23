import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const MEDIA_BASE = "https://ddznxggsxxwzgcpdqxxf.supabase.co/storage/v1/object/public/media";
const media = (path: string) => `${MEDIA_BASE}/${path}`;

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="relative inline-block h-5 w-5 rounded-full border-2 border-foreground">
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent" />
          </span>
          OrbitSites
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-underline" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="text-sm md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t px-5 py-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-2xl display">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="display text-5xl md:text-7xl">
          Got a project? <Link to="/contact" className="italic text-accent link-underline">Say hello.</Link>
        </p>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink-foreground/20 pt-6 text-sm opacity-70 md:flex-row">
          <span>© {new Date().getFullYear()} OrbitSites — Independent web design studio</span>
          <span>hello@orbitsites.co</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHead({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-4 max-w-4xl text-5xl md:text-8xl">{title}</h1>
      {children && <div className="mt-6 max-w-xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}

export function Cta({ to, children }: { to: "/contact" | "/work" | "/services"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export type Project = {
  name: string;
  url: string;
  domain: string;
  type: string;
  place: string;
  tag: string;
  blurb: string;
  stage: string;
  shot: string;
};

export const projects: Project[] = [
  {
    name: "Hotboxx",
    url: "https://hotboxx.co.za",
    domain: "hotboxx.co.za",
    type: "Kota kitchen",
    place: "Matsulu, Mpumalanga",
    tag: "Ordering site",
    blurb:
      "The full menu online with order numbers, WhatsApp payment and tap-to-navigate directions to all three Matsulu stores.",
    stage: "Live on own domain",
    shot: media("projects/hotboxx.jpg"),
  },
  {
    name: "Flipaholics SA",
    url: "https://flipaholics.co.za",
    domain: "flipaholics.co.za",
    type: "Kitchen & bath contractor",
    place: "Centurion, Gauteng",
    tag: "Brand + web",
    blurb:
      "Renovations sold through a filterable gallery — kitchens, bathrooms, closets, cabinetry — with a proper consultation booking page.",
    stage: "Live on own domain",
    shot: media("projects/flipaholics.jpg"),
  },
  {
    name: "Urban Field Guest House",
    url: "https://urbanfield.altairwebs24.workers.dev",
    domain: "urbanfield.altairwebs24.workers.dev",
    type: "Guest house",
    place: "Matsulu, Nelspruit",
    tag: "Booking site",
    blurb:
      "Hourly, half-day and overnight rates with one-tap WhatsApp booking, a room-by-room gallery and coordinates for the gate.",
    stage: "Preview build",
    shot: media("projects/urbanfield.jpg"),
  },
  {
    name: "Mahamba Kitchen Projects",
    url: "https://mahamba-kitchen-projects.altairwebs24.workers.dev",
    domain: "mahamba-kitchen-projects.altairwebs24.workers.dev",
    type: "Custom kitchens & joinery",
    place: "Pretoria",
    tag: "Portfolio site",
    blurb:
      "A numbered portfolio of kitchens, wardrobes and entertainment units, a process page, and a phone-first enquiry at the foot.",
    stage: "Preview build",
    shot: media("projects/mahamba.jpg"),
  },
  {
    name: "Floor2Frames Solutions",
    url: "https://floor2frames-solutions.altairwebs24.workers.dev",
    domain: "floor2frames-solutions.altairwebs24.workers.dev",
    type: "Flooring & aluminium",
    place: "South Africa",
    tag: "Services site",
    blurb:
      "Epoxy, cementitious, wooden flooring and aluminium work explained, shown through real installs, and quoted from one form.",
    stage: "Preview build",
    shot: media("projects/floor2frames.jpg"),
  },
  {
    name: "Antique Built-In Solutions",
    url: "https://antique-built-in-solutions.lovable.app",
    domain: "antique-built-in-solutions.lovable.app",
    type: "Built-in interiors",
    place: "South Africa",
    tag: "Workshop site",
    blurb:
      "A joinery workshop with a gallery of live installations, made-to-measure promises and a WhatsApp quote request that stays open all week.",
    stage: "Preview build",
    shot: media("projects/antique.jpg"),
  },
  {
    name: "MasterCraft Projects",
    url: "https://mastercraftprojects.lovable.app",
    domain: "mastercraftprojects.lovable.app",
    type: "Renovations & interiors",
    place: "South Africa",
    tag: "Studio site",
    blurb:
      "A quiet, editorial studio site — renovations, interiors and furniture, led by two featured projects and a single line of intent.",
    stage: "Preview build",
    shot: media("projects/mastercraft.jpg"),
  },
];

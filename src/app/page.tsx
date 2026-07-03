"use client";

import type { ReactElement } from "react";
import LeadForm from "@/components/LeadForm";
import Marquee from "@/components/Marquee";
import Faq, { type FaqEntry } from "@/components/Faq";
import TestimonialSlider, { type Testimonial } from "@/components/TestimonialSlider";
import Reveal from "@/components/Reveal";
import SiteChrome from "@/components/SiteChrome";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Gauge,
  Globe,
  Headphones,
  Layers,
  Linkedin,
  MapPin,
  Megaphone,
  Refresh,
  Search,
  Server,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Zap,
} from "@/components/icons";

type IconType = (props: { className?: string }) => ReactElement;

/* ─────────────────────────  CONTENT  ───────────────────────── */

const STAT_CHIPS = [
  { big: "10+ Years", small: "running our own MSP & MSSP" },
  { big: "Source · Place · Manage", small: "the whole hire, handled for you" },
  { big: "Ready Day One", small: "no training from zero" },
];

const MARQUEE_ITEMS = [
  { label: "Layer7 Systems", featured: true },
  { label: "// MSP" },
  { label: "Cybersecurity Resource", featured: true },
  { label: "// MSSP" },
  { label: "NdataStor", featured: true },
  { label: "// CYBERSECURITY" },
  { label: "// NOC" },
  { label: "// SOC" },
  { label: "// HELP DESK" },
  { label: "// vCIO" },
];

interface RoleCard {
  area: string;
  title: string;
  icon: IconType;
  bullets: string[];
}

const ROLES: RoleCard[] = [
  {
    area: "// help desk",
    title: "Help Desk",
    icon: Headphones,
    bullets: [
      "L1, L2 & L3 support engineers",
      "Service desk technicians",
      "Dispatchers & coordinators",
      "Help desk team leads",
    ],
  },
  {
    area: "// engineering",
    title: "Engineering",
    icon: Server,
    bullets: [
      "Network & systems engineers",
      "Cloud & infrastructure engineers",
      "DevOps & automation engineers",
      "NOC technicians & sysadmins",
    ],
  },
  {
    area: "// cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    bullets: [
      "SOC analysts (tier 1 to 3)",
      "Threat hunters & incident responders",
      "Penetration testers & ethical hackers",
      "Security engineers, vCISO & GRC",
    ],
  },
  {
    area: "// operations",
    title: "Operations",
    icon: Gauge,
    bullets: [
      "Operations directors",
      "COO & fractional COO",
      "Service delivery managers",
      "Project & process managers",
    ],
  },
  {
    area: "// sales",
    title: "Sales",
    icon: TrendingUp,
    bullets: [
      "Salespeople & account executives",
      "Appointment setters & SDRs",
      "Sales engineers",
      "Sales leaders & directors",
    ],
  },
  {
    area: "// marketing",
    title: "Marketing",
    icon: Megaphone,
    bullets: [
      "Marketing managers",
      "Directors of marketing",
      "Demand gen & content",
      "Marketing coordinators & specialists",
    ],
  },
  {
    area: "// client management",
    title: "Client Management",
    icon: Users,
    bullets: [
      "Account managers",
      "Client success managers",
      "vCIO & client-facing leads",
      "Service & practice managers",
    ],
  },
  {
    area: "// admin & finance",
    title: "Admin & Finance",
    icon: Wallet,
    bullets: [
      "Bookkeepers & accountants",
      "Billing & accounts receivable",
      "Payroll & tax prep support",
      "Administrative & executive assistants",
    ],
  },
];

const WHY_OWNERS = [
  {
    icon: UserCheck,
    roman: "i",
    title: "An Operator, Not a Recruiter",
    body: "Adam hires these exact roles for his own MSP and MSSP. He knows the spec cold, so you get the right person, not just an available one.",
  },
  {
    icon: Target,
    roman: "ii",
    title: "We Meet You at the Problem",
    body: "No job description? You just know an area is breaking? We diagnose what the hire actually needs to fix before we ever source a name.",
  },
  {
    icon: Search,
    roman: "iii",
    title: "Talent Beyond the Job Boards",
    body: "The strongest people are not actively looking. We reach them through a network built over a decade in MSP and MSSP, then vet them the way an operator vets for his own shop.",
  },
];

const PAIN_ITEMS = [
  "I need to fill this role and I cannot find the right person.",
  "I need to replace someone who is not working out.",
  "I need someone better in this seat than what I have now.",
  "I know a part of the shop is broken. I am not even sure who to hire.",
  "We are growing fast and I need qualified people, not warm bodies.",
  "I have a team in place but no one is really leading it.",
];

const STEPS = [
  {
    n: "01",
    title: "Get Started",
    body: "Fill out the form and grab a time. We have a straight, no-pressure conversation about where your shop is feeling the strain and what is actually slowing you down.",
  },
  {
    n: "02",
    title: "Find the Gap",
    body: "Sometimes you know the exact role. Sometimes you just know that help desk, engineering, operations, sales, marketing, or client management needs help. We diagnose the real gap together.",
  },
  {
    n: "03",
    title: "Shape the Hire",
    body: "We turn that gap into a clear role: full-time or fractional, the level, the comp band, and what good looks like in your shop. If you did not know what you needed, now you do.",
  },
  {
    n: "04",
    title: "Source & Place",
    body: "We go find them, including the strong people who are not actively looking. Candidates who already speak the MSP and MSSP world, vetted by an operator, ready from day one with no training from zero.",
  },
  {
    n: "05",
    title: "Placed & Guaranteed",
    body: "Every placement carries a replacement guarantee — if a hire does not work out inside the agreed window, we re-run the search.",
  },
];

interface WhyUsCard {
  n: string;
  icon: IconType;
  title: string;
  body: string;
}

const WHY_US: WhyUsCard[] = [
  {
    n: "01",
    icon: Layers,
    title: "One Vertical, Done Deeply",
    body: "We only serve MSP, MSSP, and cybersecurity firms. No generalist distraction, no learning your world on your dime.",
  },
  {
    n: "02",
    icon: Award,
    title: "Operator-Led Judgment",
    body: "Run by an active MSP and MSSP owner who hires these roles daily. We know the difference between an L2 and an L3, and we screen for it before you do.",
  },
  {
    n: "03",
    icon: Clock,
    title: "Full-Time or Fractional",
    body: "Need someone forty hours a week or a few days a month? We place either way.",
  },
  {
    n: "04",
    icon: Search,
    title: "Talent Beyond the Job Boards",
    body: "We reach the strong people who are not actively looking, through a decade-deep MSP/MSSP network.",
  },
  {
    n: "05",
    icon: Zap,
    title: "Ready Day One",
    body: "Candidates who already speak the language, so you scale without burning your team out or training from zero.",
  },
  {
    n: "06",
    icon: Refresh,
    title: "Replacement Guarantee",
    body: "If a placement does not work out inside the agreed window, we re-run the search. Our skin stays in the game.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Way better than what I expected. They underpromised and over-performed at every level.",
    name: "Cory Russell",
    role: "CEO",
    company: "Layer7 Systems (Cybersecurity MSP)",
  },
  {
    quote:
      "The offer creation was unique, going to be a great opportunity to lead with.",
    name: "David Rauschendorfer",
    role: "CEO",
    company: "Cybersecurity Resource",
  },
  {
    quote:
      "Your team understands systems really well. They're delivering everything they said they would.",
    name: "Peter Prieto",
    role: "CEO",
    company: "NdataStor (Tech & Storage)",
  },
];

const FAQS: FaqEntry[] = [
  {
    q: "Do you only work with MSP and MSSP shops?",
    a: "Yes, and on purpose. We staff MSP, MSSP, and cybersecurity firms exclusively. That focus is the whole point. We know the roles, the levels, the comp bands, and what separates a strong hire from a costly one, because it is the only world we work in.",
  },
  {
    q: "What if I don't know exactly what role I need?",
    a: "That is completely normal. A lot of owners only know which area is hurting, like ops, sales, marketing, engineering, or client service. On the call we diagnose the real gap with you and shape the hire that fixes it. You do not need a job description to get started.",
  },
  {
    q: "Full-time or fractional?",
    a: "Both. Whether you need someone full-time or a fractional role a few days a month, we source and place either way.",
  },
  {
    q: "Do you just recruit, or manage the person too?",
    a: "We source, vet, and place the right person, and we can stay involved to make sure the placement performs. Every placement carries a replacement guarantee.",
  },
  {
    q: "Can you hire internationally?",
    a: "Yes. We place domestically across the United States and internationally through vetted Employer of Record partners, so you can build a team anywhere and hire compliantly in new countries without standing up your own entity.",
  },
  {
    q: "How is this different from a normal recruiter?",
    a: "A generalist recruiter keyword-matches a resume and forwards it, then disappears the moment the offer is signed. We are run by an active MSP and MSSP operator, we know the roles cold, and we back every placement with a replacement guarantee.",
  },
];

/* ─────────────────────────  PRIMITIVES  ───────────────────────── */

function Kicker({ num, children }: { num?: string; children: string }): ReactElement {
  return (
    <p className="kicker mb-4 flex items-center gap-2">
      {num && <span className="text-muted-2">[ {num} ]</span>}
      <span>{children}</span>
    </p>
  );
}

function CtaLink({ label = "Get Started" }: { label?: string }): ReactElement {
  return (
    <a
      href="#hero"
      className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-dark)] transition-all duration-150 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(95,233,222,0.35)] active:translate-y-px"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ─────────────────────────  PAGE  ───────────────────────── */

export default function Home(): ReactElement {
  return (
    <>
      <SiteChrome />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-24 md:pb-28 md:pt-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/brand/hero-cyber.jpg)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" aria-hidden="true" />
        <div className="grid-overlay absolute inset-0" aria-hidden="true" />
        {/* DOM order (mobile) = headline → form → chips, so the form stays above the fold.
            On lg, explicit grid placement puts the form on the right, chips under the headline. */}
        <div className="relative mx-auto grid w-full max-w-[1200px] items-start gap-x-12 gap-y-6 px-6 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_1fr] lg:gap-y-8">
          <div className="lg:col-start-1 lg:row-start-1 lg:pt-4">
            <Kicker>Only for MSP &amp; MSSP owners</Kicker>
            <h1 className="h1 text-ink">
              We hire and manage the people your{" "}
              <span className="text-accent">MSP or MSSP</span> needs.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Tell us the role you&apos;re hiring for — technical, sales, marketing,
              operations, admin, or anything in between — and we&apos;ll find, place,
              and manage someone already experienced in MSP and MSSP environments.
            </p>
          </div>

          <div
            id="get-started-hero"
            className="rounded-2xl border border-border bg-surface/90 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md sm:p-6 md:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <p className="kicker mb-1">Start here</p>
            <h2 className="h3 mb-1 text-ink">What role do you need filled?</h2>
            <p className="mb-5 text-sm text-muted">
              A short, no-pressure call. We map the gap and the fix.
            </p>
            <LeadForm idPrefix="hero" />
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-start-1 lg:row-start-2">
            {STAT_CHIPS.map((chip) => (
              <div
                key={chip.big}
                className="rounded-xl border border-border bg-surface/70 p-3 backdrop-blur-sm md:p-4"
              >
                <p className="font-display text-sm font-bold leading-tight text-accent md:text-base">
                  {chip.big}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted md:text-xs">
                  {chip.small}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROOF / MARQUEE ═══ */}
      <section id="proof" className="border-y border-border bg-surface-3 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mb-10 max-w-2xl">
            <Kicker>The Proof</Kicker>
            <h2 className="h2 text-ink">MSP and MSSP shops we have worked with.</h2>
            <p className="mt-4 leading-relaxed text-muted">
              The shops that trusted us with their people: the hires they needed, the
              teams they were scaling, and the parts of the business that needed a fix.
            </p>
          </Reveal>
        </div>
        <Marquee items={MARQUEE_ITEMS} />
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ THE TEAM ═══ */}
      <section id="team" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="01">The Team</Kicker>
            <h2 className="h2 text-ink">Operators who live this world.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Escencion is a people partner, not a faceless vendor. It is led by Adam
              Totounji, who has run his own MSP and MSSP (Cynexlink) in Southern
              California for 10 years, building a strong network of talent as he
              personally found, vetted, placed, and managed every one of these roles.
              He is backed by an operations leader who builds and runs teams, and that
              network and hands-on experience now goes to work for your shop.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal as="article" className="glow-hover flex flex-col rounded-2xl border border-border bg-surface p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="kicker">Founder</span>
                <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-[11px] text-accent">
                  10+ Years running his own MSP &amp; MSSP
                </span>
              </div>
              <h3 className="h3 text-ink">Adam Totounji</h3>
              <p className="mt-1 text-sm text-muted">
                Founder, Escencion · Operator, Cynexlink MSP &amp; MSSP
              </p>
              <p className="mt-5 flex-1 leading-relaxed text-muted">
                A decade running his own MSP and MSSP (cynexlink.com), Adam hires the
                exact roles he now staffs for other owners. He has built winning teams
                across engineering, security, sales, marketing, operations, and client
                service, so he knows what good looks like at every seat. If he would not
                put someone on his own team, you never get their name.
              </p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-hover"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </Reveal>

            <Reveal as="article" delay={80} className="glow-hover flex flex-col rounded-2xl border border-border bg-surface p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="kicker">Operations</span>
                <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-[11px] text-accent">
                  $100M operations background
                </span>
              </div>
              <h3 className="h3 text-ink">Margret De Bruyn</h3>
              <p className="mt-1 text-sm text-muted">Operations &amp; Management, Escencion</p>
              <p className="mt-5 flex-1 leading-relaxed text-muted">
                Margret runs delivery and management with an operations background built
                around businesses in the $100M range. Once a hire is in, she makes sure
                the engagement runs like a real process, from onboarding through
                performance, so the people we place actually perform and stick.
              </p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-hover"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </Reveal>
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY OWNERS COME TO US ═══ */}
      <section id="why-owners" className="border-t border-border bg-surface-3 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="02">Why Owners Come to Us</Kicker>
            <h2 className="h2 text-ink">You came for a hire. You get a fix.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Most owners reach out with a specific seat in mind: an engineer, an
              operations director, a salesperson, a setter, a marketing lead. Some need
              to replace someone who is not working out. Some just know a part of the
              shop is breaking and are not sure who to hire. And some already have a team
              in place that needs someone to come in and lead it. Any of these is the
              right place to start.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY_OWNERS.map((item, i) => (
              <Reveal
                as="article"
                delay={i * 80}
                key={item.title}
                className="glow-hover rounded-2xl border border-border bg-surface p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-surface-2 text-accent">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-muted-2">{item.roman}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ WHERE WE FOCUS / ROLES ═══ */}
      <section id="roles" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="03">Where We Focus</Kicker>
            <h2 className="h2 text-ink">The roles we fill for your shop.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Eight areas we staff for MSP and MSSP owners. Come with the exact role
              you&apos;re hiring for, or just the area that&apos;s hurting. Not sure who
              you need? That&apos;s the most common way owners start.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role, i) => (
              <Reveal
                as="article"
                key={role.title}
                delay={(i % 4) * 60}
                className="glow-hover flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/25 bg-surface-2 text-accent">
                  <role.icon className="h-5 w-5" />
                </span>
                <p className="kicker mb-1">{role.area}</p>
                <h3 className="font-display text-lg font-semibold text-ink">{role.title}</h3>
                <ul className="mt-4 space-y-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-snug text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ SOUND FAMILIAR ═══ */}
      <section id="sound-familiar" className="border-y border-border bg-surface-3 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-2xl">
            <Kicker>Sound Familiar</Kicker>
            <h2 className="h2 text-ink">If this is running through your head.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PAIN_ITEMS.map((item, i) => (
              <Reveal
                key={item}
                delay={(i % 2) * 70}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <p className="leading-snug text-ink">{item}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 max-w-2xl">
            <p className="leading-relaxed text-muted">
              If any of these is you, you are in the right place. Tell us the role or the
              problem, and we figure out the fix and the cleanest way to get you there.
            </p>
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="04">How It Works</Kicker>
            <h2 className="h2 text-ink">From &ldquo;I need help&rdquo; to the right fix.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              A lot of owners do not walk in with a job title. They walk in knowing one
              area is breaking. We start there and shape the rest with you.
            </p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 40}
                className="glow-hover grid gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-8"
              >
                <span className="font-display text-4xl font-bold text-accent md:text-5xl">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ COVERAGE ═══ */}
      <section id="coverage" className="border-t border-border bg-surface-3 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="05">National &amp; International</Kicker>
            <h2 className="h2 text-ink">Build your team anywhere.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Whether the right person is two towns over or two continents away, we
              source, place, and handle the path to hire.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal as="article" className="glow-hover rounded-2xl border border-border bg-surface p-8">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-surface-2 text-accent">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="kicker mb-2">Domestic</p>
              <h3 className="font-display text-xl font-semibold text-ink">
                Across the United States
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                On-site, hybrid, and fully remote roles in every market. We know the
                talent, the comp bands, and what a real MSP and MSSP hire commands in
                your region, so the offer lands and the person sticks.
              </p>
            </Reveal>
            <Reveal as="article" delay={80} className="glow-hover rounded-2xl border border-border bg-surface p-8">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-surface-2 text-accent">
                <Globe className="h-6 w-6" />
              </span>
              <p className="kicker mb-2">International</p>
              <h3 className="font-display text-xl font-semibold text-ink">
                Global hiring, handled
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Expand your bench abroad without the legal maze. We source
                internationally and place through vetted Employer of Record partners, so
                you hire compliantly in new countries without standing up an entity
                yourself.
              </p>
            </Reveal>
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY ESCENCION ═══ */}
      <section id="why-us" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="max-w-3xl">
            <Kicker num="06">Why Escencion</Kicker>
            <h2 className="h2 text-ink">Not a recruiter. A people partner.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              The reasons MSP and MSSP owners hand us the hiring side of the shop, across
              every department.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((card, i) => (
              <Reveal
                as="article"
                key={card.n}
                delay={(i % 3) * 70}
                className="glow-hover rounded-2xl border border-border bg-surface p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/25 bg-surface-2 text-accent">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-muted-2">{card.n}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="border-y border-border bg-surface-3 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <Reveal className="mb-12 max-w-2xl">
            <Kicker num="07">What Owners Say</Kicker>
            <h2 className="h2 text-ink">What operators say about working with us.</h2>
          </Reveal>
          <Reveal>
            <TestimonialSlider items={TESTIMONIALS} />
          </Reveal>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <Reveal className="mb-10">
            <Kicker num="08">Questions</Kicker>
            <h2 className="h2 text-ink">The details.</h2>
          </Reveal>
          <Reveal>
            <Faq entries={FAQS} />
          </Reveal>
          <Reveal className="text-center">
            <CtaLink />
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section id="get-started" className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="grid-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 px-6 md:px-12 lg:grid-cols-2">
          <Reveal>
            <Kicker num="09">Get Started</Kicker>
            <h2 className="h2 text-ink">Let&apos;s solve it.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              Tell us the role you need filled, the person you need to replace, the team
              that needs a leader, or the problem you cannot crack. A short call is all
              it takes to start.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Operator-led screening — vetted the way we vet for our own shop",
                "Talent that already speaks the MSP & MSSP world",
                "Every placement backed by a replacement guarantee",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={80}
            className="rounded-2xl border border-border bg-surface p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] md:p-8"
          >
            <p className="kicker mb-1">Start here</p>
            <h3 className="h3 mb-6 text-ink">What role do you need filled?</h3>
            <LeadForm idPrefix="cta" />
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border bg-surface-3 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-surface font-mono text-sm font-bold text-accent">
              E
            </span>
            <span className="font-display text-lg font-bold text-ink">Escencion</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
            <a href="#how-it-works" className="hover:text-accent">How It Works</a>
            <a href="#roles" className="hover:text-accent">Roles</a>
            <a href="#why-us" className="hover:text-accent">Why Us</a>
            <a href="https://escencion.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">escencion.com</a>
            <a href="https://cynexlink.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">cynexlink.com</a>
          </nav>
        </div>
        <div className="mx-auto mt-8 max-w-[1200px] px-6 md:px-12">
          <p className="text-xs leading-relaxed text-muted-2">
            © 2026 Escencion // Staffing for MSP, MSSP &amp; cybersecurity // Full-time
            &amp; fractional // National &amp; international
          </p>
        </div>
      </footer>
    </>
  );
}

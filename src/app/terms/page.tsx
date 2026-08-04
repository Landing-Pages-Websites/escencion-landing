import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Company Information",
    content: (
      <>
        <p>
          Escencion LLC (&ldquo;Escencion,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides LinkedIn authority,
          meeting-generation, fractional operations consulting, staffing, and
          related business-development services for MSP and MSSP companies.
        </p>

        <div className="mt-6 border-l border-[#ff6847] pl-5">
          <p className="font-medium text-white">Escencion LLC</p>
          <p>Irvine, California</p>

          <a
            href="mailto:support@escencion.com"
            className="mt-2 block text-[#ff8064] transition hover:text-[#ff9b85]"
          >
            support@escencion.com
          </a>

          <a
            href="https://www.escencion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#ff8064] transition hover:text-[#ff9b85]"
          >
            www.escencion.com
          </a>
        </div>
      </>
    ),
  },
  {
    number: "02",
    title: "Use of Website",
    content: (
      <>
        <p>
          You agree to use this website only for lawful purposes and in a
          manner that does not violate the rights of Escencion or any third
          party.
        </p>

        <p className="mt-5">You may not:</p>

        <ul className="mt-4 space-y-3">
          {[
            "Attempt to gain unauthorized access to our website, accounts, servers, or systems.",
            "Interfere with or disrupt the operation, security, or availability of the website.",
            "Use the website or its content for fraudulent, abusive, or unlawful purposes.",
            "Copy, reproduce, republish, or distribute protected content without permission.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6847]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Services",
    content: (
      <>
        <p>
          Escencion provides business consulting, LinkedIn authority,
          meeting-generation, fractional operations, staffing, placement, and
          related services.
        </p>

        <p className="mt-5">
          The scope, duration, pricing, deliverables, and other conditions of a
          paid engagement may also be governed by a separate proposal, service
          agreement, statement of work, invoice, or other written agreement.
          Where a separate written agreement conflicts with these Terms, that
          written agreement will control for the applicable engagement.
        </p>

        <p className="mt-5">
          Business results vary based on implementation, market conditions,
          audience response, offer quality, customer participation, and other
          factors. Escencion does not guarantee any specific number of leads,
          meetings, placements, sales, revenue, or other business outcome.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All website content, branding, text, graphics, logos, videos,
          documents, processes, strategies, designs, and other materials are
          owned by or licensed to Escencion unless otherwise stated.
        </p>

        <p className="mt-5">
          You may not reproduce, modify, distribute, sell, license, republish,
          or create derivative works from our content without prior written
          permission.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Payments and Billing",
    content: (
      <>
        <p>
          Pricing, payment schedules, billing terms, cancellation provisions,
          and refund conditions for paid services will be identified in the
          applicable agreement, proposal, checkout page, invoice, or order
          documentation.
        </p>

        <p className="mt-5">
          You agree to provide current and accurate billing information.
          Failure to pay amounts when due may result in suspension or
          termination of services.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our website and services may integrate with or link to third-party
          platforms, including LinkedIn, CRM providers, scheduling tools,
          payment processors, analytics services, email systems, and messaging
          providers.
        </p>

        <p className="mt-5">
          Escencion does not control and is not responsible for the
          availability, content, security, privacy practices, or terms of those
          third-party services. Your use of a third-party service may be
          governed by that provider&apos;s own policies and terms.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "SMS/Text Messaging Terms",
    content: (
      <>
        <div className="rounded-2xl border border-[#ff6847]/30 bg-[#ff6847]/[0.06] p-5 sm:p-6">
          <p>
            If you voluntarily provide your mobile phone number and select the
            SMS consent checkbox on one of our website forms, you agree to
            receive conversational SMS/text messages from Escencion.
          </p>

          <p className="mt-5">
            Messages may relate to your inquiry, consultation, appointment
            scheduling, meeting reminders, service updates, follow-ups, and
            customer support.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8064]">
              Message frequency
            </p>
            <p className="mt-2 text-white">Message frequency varies.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8064]">
              Carrier charges
            </p>
            <p className="mt-2 text-white">
              Message and data rates may apply.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8064]">
              Opt out
            </p>
            <p className="mt-2 text-white">
              Reply <strong>STOP</strong> to unsubscribe.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8064]">
              Assistance
            </p>
            <p className="mt-2 text-white">
              Reply <strong>HELP</strong> for help.
            </p>
          </div>
        </div>

        <p className="mt-6">
          You may also request assistance by contacting{" "}
          <a
            href="mailto:support@escencion.com"
            className="text-[#ff8064] underline decoration-[#ff6847]/50 underline-offset-4 transition hover:text-[#ff9b85]"
          >
            support@escencion.com
          </a>
          .
        </p>

        <p className="mt-5">
          Consent to receive SMS/text messages is voluntary and is not a
          condition of purchasing any goods or services.
        </p>

        <p className="mt-5">
          We do not sell, rent, or share mobile phone numbers, SMS consent
          information, or text-message opt-in data with third parties or
          affiliates for their own marketing or promotional purposes.
        </p>

        <p className="mt-5">
          Mobile information may be shared only with service providers
          necessary to operate and deliver our messaging program. Those
          providers may process the information only as necessary to perform
          services on our behalf.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Escencion and its
          owners, employees, contractors, and affiliates will not be liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages arising from or related to your use of the website, services,
          communications, or third-party platforms.
        </p>

        <p className="mt-5">
          This limitation includes loss of profits, revenue, data, business
          opportunities, goodwill, or business interruption, even if Escencion
          was advised that such damages were possible.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Privacy",
    content: (
      <>
        <p>
          Our collection and use of personal information is governed by our
          Privacy Policy.
        </p>

        <Link
          href="/privacy-policy"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-[#ff8064] transition hover:text-[#ff9b85]"
        >
          View our Privacy Policy
          <span aria-hidden="true">→</span>
        </Link>
      </>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <p>
        Escencion may update these Terms periodically to reflect changes in our
        services, practices, technology, or legal requirements. Updated Terms
        become effective when posted on this website unless a different date is
        stated.
      </p>
    ),
  },
  {
    number: "11",
    title: "Contact",
    content: (
      <>
        <p>Questions about these Terms may be directed to:</p>

        <div className="mt-6 border-l border-[#ff6847] pl-5">
          <p className="font-medium text-white">Escencion LLC</p>
          <p>Irvine, California</p>

          <a
            href="mailto:support@escencion.com"
            className="mt-2 block text-[#ff8064] transition hover:text-[#ff9b85]"
          >
            support@escencion.com
          </a>

          <a
            href="https://www.escencion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#ff8064] transition hover:text-[#ff9b85]"
          >
            www.escencion.com
          </a>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#aaa7a2]">
      {/* Background details */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.22]"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#ff6847]/20 blur-[150px]" />
        <div className="absolute right-[-200px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#ff6847]/10 blur-[180px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.16em] text-white"
          >
            Escencion
          </Link>

          <Link
            href="/#get-started"
            className="inline-flex items-center justify-center rounded-full bg-[#ff6847] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff8064]"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff8064]">
              Legal / Terms
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Terms and
              <br />
              conditions.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#aaa7a2] sm:text-lg sm:leading-8">
              These Terms govern your access to and use of the Escencion
              website, services, communications, and related offerings.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm">
              <p>
                <span className="text-white">Effective:</span> June 6, 2025
              </p>

              <p>
                <span className="text-white">Last updated:</span> August 5, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal content */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          {/* Side navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8064]">
                On this page
              </p>

              <nav aria-label="Terms sections">
                <ol className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.number}>
                      <a
                        href={`#section-${section.number}`}
                        className="group flex gap-3 text-sm text-[#77736e] transition hover:text-white"
                      >
                        <span className="font-mono text-[#ff6847]">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <article className="min-w-0">
            <div className="mb-14 border-b border-white/10 pb-14">
              <p className="text-lg leading-8 text-[#c7c3be]">
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your
                access to and use of the Escencion website, services,
                communications, and related offerings. By using our website or
                engaging our services, you agree to these Terms.
              </p>
            </div>

            <div>
              {sections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-28 border-b border-white/10 py-12 first:pt-0 sm:py-16"
                >
                  <div className="grid gap-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-8">
                    <p className="font-mono text-sm text-[#ff6847]">
                      [ {section.number} ]
                    </p>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-6 text-[15px] leading-7 text-[#aaa7a2] sm:text-base sm:leading-8">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff8064]">
              Ready to begin?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Let&apos;s solve the gap in your team.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#aaa7a2]">
              Tell us where your MSP or MSSP needs support, and we&apos;ll help
              identify the right role and the right person.
            </p>

            <Link
              href="/#get-started"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#ff6847] px-7 py-3.5 font-semibold text-white transition hover:bg-[#ff8064]"
            >
              Get Started
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Escencion LLC.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-white">
              Terms and Conditions
            </Link>

            <a
              href="mailto:support@escencion.com"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

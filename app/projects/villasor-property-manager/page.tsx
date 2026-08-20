import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Villasor Property Manager — Karl Vincent Paclar",
  description:
    "A case study of Villasor Property Manager, an Android app for tenants, units, invoices, payments, parking, expenses, and financial reports.",
};

const walkthrough = [
  {
    number: "01",
    title: "Set up each property",
    copy: "Create apartment places, define their units and monthly rent, add parking slots, and save default water and electricity rates.",
    label: "Property setup",
  },
  {
    number: "02",
    title: "Move a tenant in",
    copy: "Add the tenant record, assign an available unit and parking slot, set the rent due date, and keep occupancy connected to one profile.",
    label: "Tenants + units",
  },
  {
    number: "03",
    title: "Create the monthly bill",
    copy: "Generate an invoice from rent and parking, then add utilities or custom charges before sharing the final amount.",
    label: "Invoices",
  },
  {
    number: "04",
    title: "Record every payment",
    copy: "Track full or partial payments against the correct invoice while keeping a searchable billing history for each tenant.",
    label: "Payments",
  },
  {
    number: "05",
    title: "See what needs attention",
    copy: "Use the dashboard and reports to monitor occupancy, unpaid and overdue invoices, monthly revenue, expenses, and recent payments.",
    label: "Operations + reports",
  },
  {
    number: "06",
    title: "Protect the records",
    copy: "Changes are written to the local SQLite database first, queued for cloud sync, and can also be exported as a portable backup.",
    label: "Offline + sync",
  },
];

const featureGroups = [
  {
    title: "Tenant operations",
    items: ["Tenant profiles", "Move-in and move-out", "Unit assignment", "Archived records"],
  },
  {
    title: "Billing operations",
    items: ["Rent invoices", "Utility and custom fees", "Partial payments", "Payment history"],
  },
  {
    title: "Property oversight",
    items: ["Occupancy dashboard", "Parking management", "Expense tracking", "Monthly reports"],
  },
  {
    title: "Data protection",
    items: ["Local-first storage", "Authenticated cloud sync", "Per-owner access rules", "Backup and restore"],
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 14 14 4M6 4h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path
        d="M14 9H4m4-4L4 9l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VillasorCaseStudy() {
  return (
    <main className="case-study">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link href="/#work" className="case-back">
          <ArrowLeft /> Back to projects
        </Link>
        <span>Karl Vincent Paclar · Portfolio</span>
      </nav>

      <section className="case-hero" aria-labelledby="case-title">
        <div className="case-hero-copy">
          <p className="case-kicker">Android product · Case study 02</p>
          <h1 id="case-title">
            Villasor
            <span>Property Manager</span>
          </h1>
          <p className="case-lede">
            A mobile operations app that brings tenant records, rent billing,
            payments, parking, expenses, and property reports into one clear workflow.
          </p>
          <div className="case-hero-actions">
            <a className="button button-primary" href="#walkthrough">
              View walkthrough
            </a>
          </div>
          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>Product design + development</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>Android / Expo</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Working MVP</dd>
            </div>
          </dl>
        </div>

        <div className="case-device-stage" aria-label="Villasor application dashboard preview">
          <div className="case-orbit case-orbit-one" />
          <div className="case-orbit case-orbit-two" />
          <div className="case-phone">
            <div className="case-phone-speaker" />
            <div className="case-phone-screen">
              <Image
                src="/images/villasor-dashboard.jpg"
                alt="Villasor Property Manager dashboard showing occupancy, invoices, revenue, expenses, tenants, and payments"
                fill
                priority
                sizes="(max-width: 820px) 78vw, 390px"
              />
            </div>
          </div>
          <div className="case-status-card case-status-card-top">
            <span>Local first</span>
            <strong>Works from the device database</strong>
          </div>
          <div className="case-status-card case-status-card-bottom">
            <span>Cloud protected</span>
            <strong>Authenticated owner sync</strong>
          </div>
        </div>
      </section>

      <section className="case-intro case-width" aria-labelledby="overview-title">
        <div>
          <p className="case-section-label">The project</p>
          <h2 id="overview-title">Property work is connected. The tools should be too.</h2>
        </div>
        <div className="case-intro-copy">
          <p>
            A rent payment changes an invoice. An invoice belongs to a tenant. A tenant
            occupies a unit and may also use a parking slot. Villasor keeps those records
            connected so the owner can move from a dashboard alert to the underlying
            tenant, invoice, or payment without rebuilding the story in spreadsheets.
          </p>
          <p>
            I designed the product around the owner&apos;s recurring work: set up the
            property once, move tenants in, bill each month, record payments, and review
            the financial picture.
          </p>
        </div>
      </section>

      <section id="walkthrough" className="case-walkthrough case-width" aria-labelledby="walkthrough-title">
        <div className="case-walkthrough-heading">
          <p className="case-section-label">Product walkthrough</p>
          <h2 id="walkthrough-title">From move-in to month-end.</h2>
          <p>
            The app turns a set of separate admin tasks into one repeatable operating flow.
          </p>
        </div>

        <ol className="case-steps">
          {walkthrough.map((step) => (
            <li key={step.number}>
              <span className="case-step-number">{step.number}</span>
              <div>
                <p className="case-step-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="case-capabilities case-width" aria-labelledby="capabilities-title">
        <div className="case-capabilities-heading">
          <p className="case-section-label">What is inside</p>
          <h2 id="capabilities-title">Built around real property operations.</h2>
        </div>
        <div className="case-capability-grid">
          {featureGroups.map((group, groupIndex) => (
            <article key={group.title}>
              <span>0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="case-architecture case-width" aria-labelledby="architecture-title">
        <div className="case-architecture-copy">
          <p className="case-section-label">Technical approach</p>
          <h2 id="architecture-title">Fast locally. Safer when connected.</h2>
          <p>
            The app does not wait for a network request before saving routine work. It
            writes to SQLite, updates the interface through a Zustand state layer, and
            queues changes for Supabase when a connection is available.
          </p>
          <p className="case-mvp-note">
            The current product is a single-owner MVP. Authentication and row-level
            access rules protect that owner&apos;s cloud records; broader multi-user and
            multi-device collaboration would be a later phase.
          </p>
        </div>

        <div className="case-data-flow" aria-label="Villasor data flow">
          <div>
            <span>01</span>
            <strong>React Native UI</strong>
            <small>Expo + TypeScript</small>
          </div>
          <i aria-hidden="true">↓</i>
          <div>
            <span>02</span>
            <strong>Local application state</strong>
            <small>Zustand</small>
          </div>
          <i aria-hidden="true">↓</i>
          <div>
            <span>03</span>
            <strong>Device database</strong>
            <small>Expo SQLite</small>
          </div>
          <i aria-hidden="true">↓</i>
          <div>
            <span>04</span>
            <strong>Queued cloud sync</strong>
            <small>Supabase Auth + database</small>
          </div>
        </div>
      </section>

      <section className="case-stack case-width" aria-labelledby="stack-title">
        <p className="case-section-label">Technology</p>
        <h2 id="stack-title">The build stack</h2>
        <div className="case-stack-list" aria-label="Villasor technology stack">
          {[
            "React Native",
            "Expo",
            "TypeScript",
            "React Native Paper",
            "Zustand",
            "SQLite",
            "Supabase Auth",
            "Supabase Database",
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="case-outro case-width" aria-labelledby="outro-title">
        <p className="case-section-label">Project outcome</p>
        <h2 id="outro-title">One mobile workspace for the full rental cycle.</h2>
        <p>
          Villasor demonstrates end-to-end product work: translating an operating process
          into a usable interface, modeling connected business records, handling local and
          cloud data, and packaging the result as an Android application.
        </p>
        <div className="case-outro-actions">
          <Link href="/#work" className="button button-primary">See other projects</Link>
          <a className="case-text-link" href="mailto:paclarvincentkarl@gmail.com">
            Start a conversation <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="case-footer case-width">
        <span>Villasor Property Manager · 2026</span>
        <span>Designed and developed by Karl Vincent Paclar</span>
      </footer>
    </main>
  );
}

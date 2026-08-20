import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Villasor Property Manager — Karl Vincent Paclar",
  description:
    "Villasor Property Manager is an Android app for tenants, units, invoices, payments, parking, expenses, and financial reports.",
};

const screenshots = [
  {
    title: "Dashboard",
    copy: "Occupancy, unpaid invoices, revenue, expenses, tenants, and recent payments at a glance.",
    src: "/images/villasor-dashboard-demo.png",
    alt: "Villasor Property Manager dashboard with property metrics and active tenants",
  },
  {
    title: "Tenants",
    copy: "Active tenant records with unit assignments, rent, and payment status.",
    src: "/images/villasor-tenants.png",
    alt: "Villasor Property Manager tenant list",
  },
  {
    title: "Invoices",
    copy: "Rent invoices organized by unpaid, overdue, paid, and archived status.",
    src: "/images/villasor-invoices.png",
    alt: "Villasor Property Manager invoice list",
  },
  {
    title: "Financial",
    copy: "Monthly revenue, expenses, net income, and payment activity in one view.",
    src: "/images/villasor-financial.png",
    alt: "Villasor Property Manager financial report",
  },
];

const stack = [
  "React Native",
  "Expo",
  "TypeScript",
  "SQLite",
  "Zustand",
  "Supabase",
];

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
    <main className="case-study case-study-simple">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link href="/#work" className="case-back">
          <ArrowLeft /> Back to projects
        </Link>
        <span>Karl Vincent Paclar · Portfolio</span>
      </nav>

      <section className="case-simple-hero case-width" aria-labelledby="case-title">
        <div className="case-simple-copy">
          <p className="case-kicker">Android application</p>
          <h1 id="case-title">
            Villasor
            <span>Property Manager</span>
          </h1>
          <p>
            A property management app for tenants, units, billing, payments,
            parking, expenses, and reports.
          </p>

          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>Design + development</dd>
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

        <div className="case-simple-preview">
          <Image
            src="/images/villasor-dashboard-demo.png"
            alt="Villasor Property Manager dashboard"
            width={390}
            height={844}
            loading="eager"
            sizes="(max-width: 820px) 82vw, 390px"
          />
        </div>
      </section>

      <section className="case-summary case-width" aria-labelledby="summary-title">
        <div>
          <p className="case-section-label">The project</p>
          <h2 id="summary-title">One app for the rental workflow.</h2>
        </div>
        <div>
          <p>
            Villasor connects tenant records, unit occupancy, invoices, payments,
            parking, and expenses so a property owner can manage everyday work from one phone.
          </p>
          <div className="case-stack-list" aria-label="Villasor technology stack">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="case-gallery-section case-width" aria-labelledby="gallery-title">
        <div className="case-gallery-heading">
          <p className="case-section-label">Inside the app</p>
          <h2 id="gallery-title">Key screens</h2>
        </div>

        <div className="case-gallery">
          {screenshots.map((screenshot, index) => (
            <figure key={screenshot.title}>
              <div className="case-gallery-image">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={390}
                  height={844}
                  sizes="(max-width: 620px) 86vw, (max-width: 1100px) 42vw, 360px"
                />
              </div>
              <figcaption>
                <span>0{index + 1}</span>
                <div>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.copy}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-simple-outro case-width">
        <p className="case-section-label">Villasor Property Manager</p>
        <h2>Built for clear, everyday property operations.</h2>
        <Link href="/#work" className="button button-primary">See other projects</Link>
      </section>

      <footer className="case-footer case-width">
        <span>Villasor Property Manager · 2026</span>
        <span>Designed and developed by Karl Vincent Paclar</span>
      </footer>
    </main>
  );
}

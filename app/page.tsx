import Image from "next/image";
import Link from "next/link";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  kind: string;
  status: string;
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  url?: string;
  detailUrl?: string;
  tone: "blue" | "cyan" | "steel" | "indigo";
  fit?: "contain";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Myrdamz",
    subtitle: "Cars for Sale Davao",
    kind: "Automotive website",
    status: "Published on Vercel",
    summary: "A responsive dealership website for browsing vehicles and sending inquiries.",
    image: "/images/myrdamz-homepage-live.png",
    imageAlt: "MYRDAMZ Cars for Sale Davao website",
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    url: "https://myrdamz-cars-for-sale-davao.vercel.app/",
    tone: "blue",
  },
  {
    number: "02",
    title: "Villasor",
    subtitle: "Property Manager",
    kind: "Android application",
    status: "MVP completed",
    summary: "A property management app for tenants, billing, payments, parking, and reports.",
    image: "/images/villasor-dashboard-demo.png",
    imageAlt: "Villasor Property Manager application dashboard",
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Supabase"],
    detailUrl: "/projects/villasor-property-manager",
    tone: "cyan",
  },
  {
    number: "03",
    title: "MSDRR Properties",
    subtitle: "Real-estate platform",
    kind: "CMS website",
    status: "Published on Vercel",
    summary: "A real-estate website with searchable listings and editable property content.",
    image: "/images/msdrr-properties.jpg",
    imageAlt: "MSDRR Properties real-estate website",
    stack: ["Next.js", "React", "Supabase", "Framer Motion", "Vercel"],
    url: "https://msdrr-properties.vercel.app/",
    tone: "steel",
  },
  {
    number: "04",
    title: "The Bly Team",
    subtitle: "joinblyteam.com",
    kind: "Recruitment website",
    status: "Currently offline",
    summary: "The Bly Team's recruitment website, showcasing its culture and opportunities for new agents.",
    image: "/images/bly-team.png",
    imageAlt: "The Bly Team group portrait used on joinblyteam.com",
    stack: ["GoHighLevel"],
    url: "https://joinblyteam.com/",
    tone: "indigo",
    fit: "contain",
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

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 3v11M4.5 9.5 9 14l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function ProjectShowcase({ project }: { project: Project }) {
  const content = (
    <>
      <div className="project-visual">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 820px) 100vw, 58vw"
          loading={project.number === "01" ? "eager" : "lazy"}
          className={project.fit === "contain" ? "image-contain" : undefined}
        />
        <div className="visual-topline">
          <span>{project.number} / 04</span>
          <span>{project.status}</span>
        </div>
        <span className="visual-number">{project.number}</span>
      </div>

      <div className="project-panel">
        <div>
          <p className="project-kind">{project.kind}</p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div>
          <p className="project-summary">{project.summary}</p>
          <div className="project-stack">
            <p className="stack-label">Stack</p>
            <div className="tag-list" aria-label={`${project.title} technology stack`}>
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          {(project.url || project.detailUrl) && (
            <span className="project-visit">
              {project.detailUrl ? "View case study" : "Visit website"} <ArrowUpRight />
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        className={`project-showcase tone-${project.tone}`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.title} website`}
      >
        {content}
      </a>
    );
  }

  if (project.detailUrl) {
    return (
      <Link
        className={`project-showcase tone-${project.tone}`}
        href={project.detailUrl}
        scroll
        aria-label={`View the ${project.title} case study`}
      >
        {content}
      </Link>
    );
  }

  return <article className={`project-showcase tone-${project.tone}`}>{content}</article>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-rail">
          <span>Portfolio · 2026</span>
          <span>Davao City · Philippines</span>
        </div>

        <div className="hero-stage">
          <figure className="hero-portrait">
            <Image
              src="/images/karl-vincent-paclar.jpg"
              alt="Portrait of Karl Vincent Paclar"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 42vw"
            />
            <div className="portrait-tint" />
          </figure>

          <div className="hero-copy">
            <Eyebrow>Developer</Eyebrow>
            <h1 id="hero-title">
              <span className="hero-title-line">Web &amp; App</span>
              <span className="hero-word-muted">portfolio</span>
            </h1>
            <p className="hero-intro">
              Hi, I&apos;m Karl Vincent Paclar, a developer based in Davao City. I
              build websites and apps for people and businesses.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects <ArrowDown />
              </a>
            </div>
          </div>

          <div className="hero-nameplate">Karl Vincent Paclar</div>
        </div>
      </section>

      <div className="page-shell">
        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-heading work-heading">
            <div>
              <Eyebrow>Featured projects</Eyebrow>
              <h2 id="work-title">
                <span>Selected</span>
                <span className="heading-muted">projects</span>
              </h2>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <ProjectShowcase key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-heading">
            <Eyebrow>About me</Eyebrow>
            <h2 id="about-title">
              About <em>me.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-statement">
              <p>
                I&apos;m a developer who enjoys creating clean, reliable websites and apps that are simple to use.
              </p>
            </div>
            <div className="about-copy">
              <p>
                React · Next.js · React Native · Supabase
              </p>
            </div>
          </div>

        </section>

        <footer id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-layout">
            <span id="contact-title" className="contact-label">Contact</span>
            <a className="contact-email" href="mailto:paclarvincentkarl@gmail.com">
              paclarvincentkarl@gmail.com <ArrowUpRight />
            </a>
          </div>
          <div className="footer-line">
            <span>Portfolio · 2026</span>
            <span>Karl Vincent Paclar</span>
            <a href="https://www.linkedin.com/in/karl-vincent-p-0616b6217" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

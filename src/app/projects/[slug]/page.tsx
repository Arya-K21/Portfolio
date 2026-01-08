import { projects } from "../data";
import { notFound } from "next/navigation";
import styles from "./project.module.css";
import Link from "next/link";

// Pre-render all project paths for static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Individual Project Page Component
// params is a Promise in Next.js 15+
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className={`${styles.container} fade-in`}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.title}>{project.title}</h1>
        
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.label}>Role</span>
            <span className={styles.value}>{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Year</span>
            <span className={styles.value}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Category</span>
            {/* Display first category */}
            <span className={styles.value}>{project.categories[0]}</span>
          </div>
        </div>

        <p className={styles.summary}>{project.description}</p>
      </header>

      {/* Visual Showcase (Gradient/Image) */}
      <div 
        className={styles.showcase} 
        style={{ background: project.gradient }}
      >
        {/* Placeholder text if no image */}
        <span>Project Preview</span>
      </div>

      {/* Case Study Content Wrapper */}
      <div className={styles.contentSection}>
        {/* Problem & Context */}
        <div className="fade-in delay-1">
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.text}>
            Every great product starts with a challenge. For {project.title}, the goal was to address specific user pain points in the {project.categories[0]} space. We identified that distinct friction points were causing drop-offs and reducing overall engagement. 
            (This is a placeholder for the actual case study content.)
          </p>
        </div>

        {/* Process & Thinking */}
        <div className="fade-in delay-2">
          <h2 className={styles.sectionTitle}>The Process</h2>
          <p className={styles.text}>
            Our approach started with deep user research to understand the core needs. Through iterative wireframing and prototyping, we explored various interaction models. The focus was always on simplification and clarity—stripping away the non-essential to reveal the core utility.
          </p>
          <p className={styles.text}>
             Product thinking drove every design decision, ensuring that aesthetics never compromised functionality.
          </p>
        </div>

        {/* Solution & Outcome */}
        <div className="fade-in delay-3">
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.text}>
            The final result is a cohesive digital experience that feels both premium and accessible. By leveraging a modular design system and refining the micro-interactions, we achieved a significant improvement in user satisfaction scores.
          </p>
        </div>
      </div>

      {/* Simple Navigation Footer */}
      <nav className={styles.navigation}>
        <Link href="/projects" className={styles.navLink}>
          &larr; Back to Projects
        </Link>
        {/* Could add Next/Prev logic here */}
      </nav>
    </article>
  );
}

import Link from "next/link";
import { projects } from "./data";
import styles from "./projects.module.css";

// Projects Index Page
// Displays a grid of project cards similar to a feature catalog.
export default function Projects() {
  return (
    <div className={styles.container}>
      
      {/* Header Section */}
      <div className={`${styles.header} fade-in`}>
        <h1 className={styles.title}>Work & Explorations</h1>
        <p className={styles.subtitle}>
          A collection of product designs, experiments, and frontend capabilities.
        </p>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.id}
            className={`${styles.card} fade-in`}
            // Staggered animation delay for a cascading effect
            style={{ animationDelay: `${(index + 1) * 0.1}s` } as React.CSSProperties}
          >
            {/* Visual Preview (Gradient or Image) */}
            <div className={styles.preview} style={{ background: project.gradient }}>
              {/* 
                 TODO: Replace gradient with <Image /> when specific assets are available.
                 For now, gradients provide a clean, modern look.
              */}
            </div>
            
            {/* Project Content */}
            <div className={styles.content}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.footer}>
                <span className={styles.role}>{project.role}</span>
                <span className={styles.linkText}>View Case Study &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

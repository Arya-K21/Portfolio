import Link from "next/link";
import styles from "./page.module.css";
import projectStyles from "./projects/projects.module.css";
import { projects } from "./projects/data";

export default function Home() {
  // Select top 1 project for home page
  const featuredProjects = projects.slice(0, 1);

  return (
    <>
      {/* 1. LANDING HERO */}
      <section className={styles.hero}>
        <span className={`${styles.name} fade-in`}>Arya Kulkarni</span>
        <h1 className={`${styles.title} fade-in delay-1`}>
          Creating digital experiences <br /> that bridge utility & emotion.
        </h1>
        <p className={`${styles.description} fade-in delay-2`}>
          UI/UX Designer & Frontend Developer driven by clarity and craft.
        </p>
      </section>

      {/* 2. ABOUT INFO */}
      <section className={`${styles.aboutSection} fade-in`}>
        <span className={styles.sectionLabel}>The Philosophy</span>
        <p className={styles.aboutText}>
          I believe software should be quiet, capable, and kind. 
          <br /><br />
          My work sits at the intersection of <span className={styles.aboutHighlight}>design systems</span> and <span className={styles.aboutHighlight}>frontend engineering</span>, ensuring that every pixel is intentional and every interaction feels physically responsive.
        </p>
      </section>

      {/* 2.5 Connective Line */}
      <div className={styles.connectiveLine}></div>

      {/* 3. SELECTED WORK */}
      <section style={{ paddingBottom: '6rem' }}>
        {/* Section Label - Centered or Aligned */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className={styles.sectionLabel}>Selected Work</span>
        </div>

        {/* Custom Header Layout */}
        <div className={styles.workHeader}>
          
          {/* Grid Content (Now First/Left) */}
          {/* Grid Content */}
          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.id}
                className={`${styles.projectCard} fade-in`}
                style={{ animationDelay: `${index * 0.15}s` } as React.CSSProperties}
              >
                <div className={styles.projectPreview} style={{ background: project.gradient }}>
                  <div className={styles.projectOverlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.overlayTitle}>{project.title}</h3>
                      <div className={styles.techStack}>
                        {project.techStack?.slice(0, 3).map((tech) => (
                          <span key={tech} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <object>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.githubLink}
                            aria-label="View Source on GitHub"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        </object>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={styles.projectInfo}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.projectMeta}>
                    <span>{project.role}</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow Link */}
          <Link href="/projects" className={styles.sideLink}>
            <div className={styles.arrowCircle}>&rarr;</div>
            <span className={styles.labelLink}>All Projects</span>
          </Link>

        </div>
      </section>

      {/* Footer is handled by RootLayout */}
    </>
  );
}

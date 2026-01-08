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

      {/* 3. SELECTED WORK */}
      <section style={{ paddingBottom: '6rem' }}>
        {/* Custom Header Layout */}
        <div className={styles.workHeader}>
          
          {/* Grid Content (Now First/Left) */}
          <div>
            <div className={styles.projectGrid}>
              {featuredProjects.map((project, index) => (
                <Link 
                  href={`/projects/${project.slug}`} 
                  key={project.id}
                  className={`${styles.projectCard} fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` } as React.CSSProperties}
                >
                  <div className={styles.projectPreview} style={{ background: project.gradient }}>
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

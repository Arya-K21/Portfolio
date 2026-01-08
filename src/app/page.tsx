import Link from "next/link";
import styles from "./page.module.css";
import projectStyles from "./projects/projects.module.css";
import { projects } from "./projects/data";

// This is the main Home Page component.
// It serves as the landing area with a strong Hero section.
export default function Home() {
  return (
    // The main container for the hero section
    <>
    <section className={styles.hero}>
      
      {/* 
        Introduction / Name Label 
        "fade-in" class triggers the enter animation defined in globals.css
      */}
      <span className={`${styles.name} fade-in`}>Arya Kulkarni</span>
      
      {/* 
        Main Headline / Role 
        Uses <br /> to force a line break for better visual balance on desktop
      */}
      <h1 className={`${styles.title} fade-in delay-1`}>
        UI/UX Designer & <br /> Frontend Developer
      </h1>
      
      {/* 
        Positioning Statement 
        Keep this short (2 lines max) to maintain the clean aesthetic.
      */}
      <p className={`${styles.description} fade-in delay-2`}>
        Crafting digital products that feel calm, premium, and human.
        Bridging the gap between design and engineering to build exploration-focused experiences.
      </p>
      
      {/* Call to Action Buttons */}
      <div className={`${styles.actions} fade-in delay-3`}>
        <Link href="/projects" className={styles.primaryBtn}>
          View Projects
        </Link>
        <Link href="/contact" className={styles.secondaryBtn}>
          Get in Touch
        </Link>
      </div>
    </section>

    {/* Selected Projects Section */}
    <section className={projectStyles.container} style={{ paddingTop: '0' }}>
      <div className={`${projectStyles.header} fade-in`} style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <h2 className={projectStyles.title}>Selected Work</h2>
      </div>

      <div className={projectStyles.grid}>
        {projects.map((project, index) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.id}
            className={`${projectStyles.card} fade-in`}
            style={{ animationDelay: `${(index + 1) * 0.1}s` } as React.CSSProperties}
          >
            <div className={projectStyles.preview} style={{ background: project.gradient }}>
            </div>
            
            <div className={projectStyles.content}>
              <h2 className={projectStyles.projectTitle}>{project.title}</h2>
              <p className={projectStyles.projectDesc}>{project.description}</p>
              
              <div className={projectStyles.footer}>
                <span className={projectStyles.role}>{project.role}</span>
                <span className={projectStyles.linkText}>View Case Study &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}

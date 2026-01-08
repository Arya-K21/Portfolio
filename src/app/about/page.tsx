import styles from "./about.module.css";

// About Page Component
// Focuses on design philosophy and skills rather than a chronological bio.
export default function About() {
  return (
    <div className={`${styles.container} fade-in`}>
      <h1 className={styles.title}>Philosophy</h1>
      
      {/* Intro Statement */}
      <p className={styles.intro}>
        I believe that the best digital products are the ones that disappear. 
        When design works, it feels like an extension of thought—calm, intuitive, and almost invisible.
      </p>

      {/* How I Work Section */}
      <section className={`${styles.section} fade-in delay-1`}>
        <span className={styles.label}>How I Work</span>
        <p className={styles.text}>
          My process is deeply rooted in curiosity. I don't just design screens; I design systems. 
          Whether I'm writing React code or refining a UI component in Figma, I'm always looking for the underlying logic that makes a product scalable and human-centric.
        </p>
        <p className={styles.text}>
           I bridge the gap between "how it looks" and "how it works." By understanding the constraints of engineering, I design solutions that are not just beautiful but buildable and performant.
           This blend of disciplines allows me to explore ideas rapidly and execute them with precision.
        </p>
      </section>
      
      {/* Skills Section */}
      {/* Skills Section */}
      <section className={`${styles.section} fade-in delay-2`}>
        <span className={styles.label}>Toolkit & Skills</span>
        
        <div className={styles.techStackSection}>
          {/* Design Stack */}
          <div className={styles.techCategory}>
            <h3 className={styles.techHeading}>Design</h3>
            <div className={styles.pillContainer}>
              {["Figma", "Adobe CC", "Spline 3D", "Prototyping", "Design Systems", "User Research"].map((skill) => (
                <span key={skill} className={styles.techPill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Development Stack */}
          <div className={styles.techCategory}>
            <h3 className={styles.techHeading}>Development</h3>
            <div className={styles.pillContainer}>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "Git/GitHub"].map((skill) => (
                <span key={skill} className={styles.techPill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

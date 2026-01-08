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
      <section className={`${styles.section} fade-in delay-2`}>
        <span className={styles.label}>Toolkit & Skills</span>
        <div className={styles.skillsGrid}>
           {/* Design Skills */}
           <div className={styles.skillCategory}>
             <h3>Design</h3>
             <ul className={styles.skillList}>
               <li>User Interface (UI) System Design</li>
               <li>User Experience (UX) Strategy</li>
               <li>Wireframing & Prototyping</li>
               <li>Interaction Design</li>
               <li>Figma, Adobe CC, Spline</li>
             </ul>
           </div>
           
           {/* Engineering Skills */}
           <div className={styles.skillCategory}>
             <h3>Development</h3>
             <ul className={styles.skillList}>
               <li>Frontend Engineering (React, Next.js)</li>
               <li>TypeScript & Modern JavaScript</li>
               <li>CSS Architecture (Modules, Tailwind)</li>
               <li>Micro-Interactions & Animation</li>
               <li>Performance Optimization</li>
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
}

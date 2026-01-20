"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "../data";
import styles from "./detail.module.css";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug; 
  // params itself can be Promise in newer Next.js but standard client usage is direct object often or we await it.
  // In Client Components, useParams() returns the object directly.

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project Not Found</h1>
        <Link href="/projects" className={styles.backLink}>&larr; Back to Projects</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className={styles.container}
    >
      <Link href="/projects" className={styles.backLink}>
        &larr; Back to Projects
      </Link>

      <header className={styles.header}>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          {project.title}
        </motion.h1>
        
        <div className={styles.meta}>
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.description}
        >
          {project.description}
        </motion.p>

        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        
        {project.githubUrl && (
             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                View on GitHub
             </a>
        )}
      </header>

      {/* Gallery Grid for Photos */}
      <section>
        <h3 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Project Gallery</h3>
        <div className={styles.galleryGrid}>
          {/* Placeholders for 4-6 images as requested "small square frames" */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className={styles.placeholderText}>Image Space {i}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
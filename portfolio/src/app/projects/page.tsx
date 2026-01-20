"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { projects } from "./data";
import styles from "./projects.module.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced Scroll Handler
  const handleWheel = useCallback((e: WheelEvent) => {
    if (scrollTimeout.current) return;

    // Threshold to prevent accidental small scrolls
    if (Math.abs(e.deltaY) < 20) return;

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 400); // 400ms delay between scroll actions for calm feel

    if (e.deltaY > 0) {
      nextProject();
    } else {
      prevProject();
    }
  }, [activeIndex]); // slightly inefficient dep, but handled by ref logic mostly

  // Navigation Logic
  const nextProject = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel]);

  // Key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Dynamic Background */}
      <div 
        className={styles.backgroundLayer} 
        style={{ background: projects[activeIndex].gradient }}
      />

      {/* Context Title */}
      <h1 className={styles.pageTitle}>Work & Explorations</h1>

      {/* Domain Navigation */}
      <div className={styles.domainToggle}>
        <button 
          className={`${styles.domainBtn} ${projects[activeIndex].domain === 'Design' ? styles.domainBtnActive : ''}`}
          onClick={() => {
            const idx = projects.findIndex(p => p.domain === 'Design');
            if (idx !== -1) setActiveIndex(idx);
          }}
        >
          Design
        </button>
        <button 
          className={`${styles.domainBtn} ${projects[activeIndex].domain === 'Development' ? styles.domainBtnActive : ''}`}
          onClick={() => {
            const idx = projects.findIndex(p => p.domain === 'Development');
            if (idx !== -1) setActiveIndex(idx);
          }}
        >
          Development
        </button>
      </div>

      {/* Stacked Cards Container */}
      <div className={styles.stackWrapper}>
        {projects.map((project, index) => {
          // Calculate relative position
          const offset = index - activeIndex;
          const isActive = offset === 0;
          const isPast = offset < 0;
          const isUpcoming = offset > 0;

          return (
            <div
              key={project.id}
              className={`${styles.card} ${isActive ? styles.active : ""} ${isPast ? styles.past : ""} ${isUpcoming ? styles.upcoming : ""}`}
              style={{
                "--offset": offset,
                zIndex: 100 - index, // Layers: 0 is top
              } as React.CSSProperties}
            >
              {/* Card Visual content */}
              <Link href={`/projects/${project.slug}`} className={styles.cardInner}>
                
                {/* Visual Half */}
                <div 
                  className={styles.cardPreview}
                  style={{ background: project.gradient }}
                >
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

                {/* Text Half */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{project.year}</span>
                    <span>{project.role}</span>
                  </div>
                  
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.cardAction}>
                    Explore Project &rarr;
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className={styles.controls}>
        <button 
          onClick={prevProject} 
          disabled={activeIndex === 0}
          className={`${styles.navBtn} ${styles.prev}`}
          aria-label="Previous Project"
        >
          &larr;
        </button>
        
        <button 
          onClick={nextProject} 
          disabled={activeIndex === projects.length - 1}
          className={styles.navBtn}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
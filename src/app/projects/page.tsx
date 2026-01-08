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
                  {/* Future: Image component */}
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
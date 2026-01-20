"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Custom progress logic to match the bar visually
    const controls = animate(0, 100, {
      duration: 6.5, // Adjusted to user preference 6.5s
      ease: [0.22, 1, 0.36, 1], // Custom buffer easing
      onUpdate: (latest) => setProgress(Math.round(latest)),
      onComplete: () => {
        setTimeout(onComplete, 800); // Longer pause at 100%
      }
    });
    return () => controls.stop();
  }, [onComplete]);

  return (
    <motion.div
      className={styles.container}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className={styles.content}>
        <div className={styles.textWrapper}>
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className={styles.loadingText}
           >
             System Initializing...
           </motion.span>
           <span className={styles.percentage}>{progress}%</span>
        </div>
        
        <div className={styles.lineTrack}>
          {/* Main Line */}
          <motion.div
            className={styles.lineFill}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0 }} // Controlled by state now
          />
          {/* Ghost Line / Glow */}
          <motion.div
            className={styles.ghostLine}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }} // Slight lag
          />
        </div>
      </div>
    </motion.div>
  );
}
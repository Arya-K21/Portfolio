"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";
import { LoadingProvider, useLoading } from "../context/LoadingContext";

function PreloaderManager() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    // Check session storage
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("portfolio_visited");
       // DISABLED FOR TESTING: Remove comment to enable one-time-per-session
      // if (hasVisited) {
      //   setLoading(false);
      // }
    }
  }, [setLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("portfolio_visited", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading && <Preloader key="preloader" onComplete={handleLoaderComplete} />}
    </AnimatePresence>
  );
}

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading();

  return (
    <motion.div
      initial={{ opacity: 0 }} /* No movement, just fade */
      animate={!loading ? { opacity: 1 } : {}}
      transition={{ 
        duration: 1.0, 
        ease: "easeOut",
        delay: 0.1 // Quick fade in
      }}
      style={{ minHeight: "100vh" }} // Ensure it takes full height
    >
      {children}
    </motion.div>
  );
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <PreloaderManager />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LoadingProvider>
  );
}

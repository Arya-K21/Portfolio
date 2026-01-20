"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to prevent loader on refreshes or subsequent visits in same tab
    // If you WANT it to show on every refresh but not navigation, remove this check.
    // User asked "Initialize only once when opened", implies session persistence.
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("portfolio_visited");
      // DISABLED FOR TESTING: User wants to adjust animation speed, so we must show it every time.
      // if (hasVisited) {
      //   setLoading(false);
      // }
    }
  }, []);

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
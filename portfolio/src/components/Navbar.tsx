"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // If we are not on home page, reset active section (or rely on pathname)
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" } // Trigger when section crosses center of viewport
    );

    // Observe sections
    const sections = ["home", "about", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Arya K.</Link>
      </div>
      <ul className={styles.links}>
        {navLinks.map((link) => {
          let isActive = false;

          if (link.name === "Projects") {
            // Projects is a separate page
            isActive = pathname.startsWith("/projects");
          } else if (pathname === "/") {
             // Home page internal navigation
             isActive = activeSection === link.id;
             
             // Initial load fallback: if no section is active yet and we are home, default to home
             // This logic should be stable. However, to stay strict, let's rely on activeSection state.
             // If activeSection is empty, nothing highlights until user scrolls or observer fires. 
             // That is safer for hydration.
          }

          return (
            <li key={link.name} className={styles.linkItem}>
              <Link
                href={link.href}
                className={isActive ? styles.active : ""}
                onClick={() => {
                   if (link.id !== "projects") setActiveSection(link.id);
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

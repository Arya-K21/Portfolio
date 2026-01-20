"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  
  // Only show contact info on Home Page
  const showContact = pathname === "/";

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {showContact && (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Let's Connect</h2>
              <p className={styles.subtitle}>
                Have a project in mind or just want to chat?
              </p>
            </div>

            {/* Huge Email Link */}
            <a href="mailto:kulkarniarya216@gmail.com" className={styles.email}>
              kulkarniarya216@gmail.com
            </a>

            {/* Social Links */}
            <div className={styles.socials}>
              <a
                href="www.linkedin.com/in/kulkarni-arya"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Arya-K21"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
              {/* <a
                href="https://x.com/Arya_K216"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter (X)
              </a>
              <a
                href="https://www.instagram.com/arya_k216/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a> */}
            </div>
          </>
        )}

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Arya Kulkani. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

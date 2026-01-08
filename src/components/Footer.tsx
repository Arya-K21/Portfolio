import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.subtitle}>Open for opportunities, collaborations, or just a chat.</p>
        </div>
        
        <a href="mailto:kulkarniarya216@gmail.com" className={styles.email}>
            kulkarniarya216@gmail.com
        </a>

        <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Dribbble</a>
        </div>

        <div className={styles.copyright}>
            © {new Date().getFullYear()} Arya Kulkarni. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

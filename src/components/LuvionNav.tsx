import { useState, useEffect } from "react"
import styles from "./LuvionNav.module.css"

export default function LuvionNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Reveal nav after scrolling past initial opening viewport
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.navVisible : ""}`} aria-label="Main Navigation">
      <div className={styles.brandGroup}>
        <a href="#top" className={styles.marque} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span>LUVION</span>
          <span className={styles.marqueDot} />
        </a>
        <span className={styles.modelBadge}>911 GT3 RS</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="#section-08" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-08"); }}>
            360° Aero
          </a>
        </li>
        <li>
          <a href="#section-09" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-09"); }}>
            Art of Motion
          </a>
        </li>
        <li>
          <a href="#section-10" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-10"); }}>
            Anatomy
          </a>
        </li>
        <li>
          <a href="#section-11" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-11"); }}>
            Performance
          </a>
        </li>
        <li>
          <a href="#section-12" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-12"); }}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#section-13" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo("section-13"); }}>
            The Story
          </a>
        </li>
      </ul>

      <a href="#enquiry" className={styles.ctaBtn} onClick={(e) => { e.preventDefault(); scrollTo("enquiry"); }}>
        Enquire
      </a>
    </nav>
  )
}


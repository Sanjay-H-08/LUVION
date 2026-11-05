import { useState } from "react"
import styles from "./EditorialPerspectives.module.css"

export interface PerspectiveItem {
  id: string
  label: string
  headline: string
  copy: string
  image: string
}

export const PERSPECTIVES: PerspectiveItem[] = [
  {
    id: "singular-obsession",
    label: "01 / ARCHITECTURE",
    headline: "The shape of a singular obsession.",
    copy: "The 911 GT3 RS makes its intentions visible. Openings release air pressure. Surfaces guide cooling streams across the central radiator. Carbon fibre eliminates dead mass. Every aerodynamic stroke returns to one uncompromised question: what serves the drive?",
    image: "/assets/porsche/optimized/gt3rs_992_macadamia_front34.webp"
  },
  {
    id: "tangible-performance",
    label: "02 / PHILOSOPHY",
    headline: "Performance, made tangible.",
    copy: "Born from a pure motorsport mindset, it transforms track thermodynamics into an unmistakable silhouette. Not ornament. Not excess. Every intake, louvre, and endplate exists solely to maximize grip and driver connection.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_direct_front.webp"
  },
  {
    id: "one-purpose",
    label: "03 / PURPOSE",
    headline: "Every decision. One purpose.",
    copy: "Airflow shaped in Weissach. 860 kilograms of downforce delivered at 285 km/h. Four rotary dials placing chassis damping, e-diff lock and traction parameters instantly at the fingertips. Engineering elevated to an art form.",
    image: "/assets/porsche/optimized/gt3rs_992_nordschleife_record_curb.webp"
  }
]

export default function EditorialPerspectives() {
  const [activeIdx, setActiveIdx] = useState(0)

  const current = PERSPECTIVES[activeIdx]

  return (
    <section className={styles.container} aria-label="LUVION Editorial Perspectives">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>13 / THE STORY</p>
          <h2 className={styles.title}>Nothing Without Purpose.</h2>
          <p className={styles.subtitle}>
            A cinematic study of engineering clarity. Three editorial chapters exploring the singular focus behind the Porsche 911 GT3 RS.
          </p>
        </div>

        {/* Editorial Presentation Stage */}
        <div className={styles.stage}>
          {PERSPECTIVES.map((item, idx) => (
            <img
              key={item.id}
              src={item.image}
              alt={`Porsche 911 GT3 RS — ${item.headline}`}
              className={`${styles.slideImage} ${idx === activeIdx ? styles.slideImageActive : ""}`}
            />
          ))}

          <div className={styles.vignette} />

          <div className={styles.contentBox}>
            <span className={styles.perspectiveLabel}>{current.label}</span>
            <h3 className={styles.headline}>{current.headline}</h3>
            <div className={styles.accentRule} />
            <p className={styles.bodyCopy}>{current.copy}</p>
          </div>
        </div>

        {/* Perspective Selectors */}
        <div className={styles.navBar} role="tablist" aria-label="Select story perspectives">
          {PERSPECTIVES.map((item, idx) => {
            const isActive = idx === activeIdx
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.perspectiveBtn} ${isActive ? styles.perspectiveBtnActive : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className={styles.pip} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}


import { useState } from "react"
import styles from "./AnatomyOfPerformance.module.css"

export interface AnatomyCategory {
  id: string
  label: string
  title: string
  subtitle: string
  description: string
  image: string
  telemetry: string[]
}

export const ANATOMY_CATEGORIES: AnatomyCategory[] = [
  {
    id: "aerodynamics",
    label: "Aerodynamics",
    title: "Air, directed.",
    subtitle: "Swan-neck rear wing & active central-radiator architecture",
    description: "A single large central radiator in the nose replaces the traditional three-radiator setup, creating space for active underbody flaps that continuously balance front downforce with the hydraulically actuated DRS swan-neck rear wing.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_aero_wing_drs.webp",
    telemetry: [
      "860 kg total downforce generated at 285 km/h",
      "Hydraulic DRS (Drag Reduction System) active upper blade",
      "Continuously adjustable front underbody diffusers"
    ]
  },
  {
    id: "exterior",
    label: "Exterior",
    title: "Form follows intent.",
    subtitle: "CFRP lightweight construction & wheel arch ventilation",
    description: "Every surface of the body is shaped by aerodynamic imperative. Carbon-fibre reinforced plastic (CFRP) is utilized for the doors, front wings, roof and rear deck lid, while front louvred fender arches vent turbulent air from the wheel wells.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_side_studio.webp",
    telemetry: [
      "1,450 kg DIN curb weight with Weissach Package",
      "CFRP doors, bonnet, front wings and double-bubble roof",
      "Dynamic wheel arch louvres reducing high-speed front lift"
    ]
  },
  {
    id: "interior",
    label: "Interior",
    title: "The driver, centred.",
    subtitle: "Uncompromising ergonomics & full carbon bucket seating",
    description: "A stripped-back, purpose-built cockpit designed for 3G track loads. Lightweight full CFRP bucket seats provide lateral support, finished in breathable black Race-Tex with red contrast stitching and lightweight opening loops.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_interior_cockpit.webp",
    telemetry: [
      "CFRP carbon-fibre reinforced plastic bucket shells",
      "Black Race-Tex upholstery with lightweight door pull loops",
      "Integrated Clubsport roll cage chassis reinforcement"
    ]
  },
  {
    id: "cockpit",
    label: "Cockpit",
    title: "Control, within reach.",
    subtitle: "Four steering rotary switches for direct track telemetry adjustment",
    description: "Four dedicated rotary switches mounted directly on the multifunction steering wheel allow real-time adjustment of PASM dampers (separate bump and rebound for front and rear axles), PTV+ torque vectoring, and 7-stage traction control without releasing the wheel.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_interior_steering.webp",
    telemetry: [
      "4 rotary steering switches: PASM, PTV+, ESC/TC, Drive Mode",
      "Independent multi-stage bump and rebound damper control",
      "Central analogue tachometer flanked by twin 7-inch displays"
    ]
  },
  {
    id: "performance",
    label: "Performance",
    title: "Engineered for the circuit.",
    subtitle: "Naturally aspirated 4.0-litre boxer engine revving to 9,000 RPM",
    description: "A 4.0-litre high-revving naturally aspirated flat-six producing 525 PS (386 kW) with individual throttle butterflies and rigid valvetrain. Mated to a close-ratio 7-speed PDK transmission, it propels the 911 GT3 RS across the Nürburgring Nordschleife in 6:49.328.",
    image: "/assets/porsche/optimized/gt3rs_992_nordschleife_record_carousel.webp",
    telemetry: [
      "525 PS (386 kW) @ 8,500 RPM · 9,000 RPM maximum redline",
      "0–100 km/h in 3.2 seconds · 296 km/h top speed",
      "6:49.328 official Nürburgring Nordschleife lap record"
    ]
  }
]

export default function AnatomyOfPerformance() {
  const [activeIdx, setActiveIdx] = useState(0)

  const current = ANATOMY_CATEGORIES[activeIdx]

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % ANATOMY_CATEGORIES.length)
  }

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + ANATOMY_CATEGORIES.length) % ANATOMY_CATEGORIES.length)
  }

  return (
    <section className={styles.container} aria-label="Anatomy of Performance">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>10 / ENGINEERED WITH INTENT</p>
          <h2 className={styles.title}>Anatomy of Performance</h2>
          <p className={styles.subtitle}>
            Five synchronized engineering categories. Explore the motorsport systems that define the 992-generation 911 GT3 RS.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className={styles.categoryTabs} role="tablist" aria-label="Anatomy categories">
          {ANATOMY_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeIdx
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Compact Synchronized Explorer Card */}
        <div className={styles.explorerCard}>
          <div className={styles.imagePane}>
            <img
              src={current.image}
              alt={`Porsche 911 GT3 RS — ${current.title}`}
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
            <span className={styles.categoryTag}>{current.label}</span>
          </div>

          <div className={styles.infoPane}>
            <div className={styles.infoTop}>
              <span className={styles.progressLabel}>
                CHAPTER 10.{activeIdx + 1}
              </span>
              <h3 className={styles.itemTitle}>{current.title}</h3>
              <p className={styles.itemSubtitle}>{current.subtitle}</p>
              <div className={styles.rule} />
              <p className={styles.itemDesc}>{current.description}</p>

              {/* Telemetry Highlights */}
              <div className={styles.telemetryList}>
                {current.telemetry.map((t, i) => (
                  <div key={i} className={styles.telemetryItem}>
                    <span className={styles.telemetryPip} />
                    <span className={styles.telemetryText}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className={styles.navRow}>
              <span className={styles.counter}>
                {String(activeIdx + 1).padStart(2, "0")} / {String(ANATOMY_CATEGORIES.length).padStart(2, "0")}
              </span>

              <div className={styles.navButtons}>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={prev}
                  aria-label="Previous category"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.navBtn}
                  onClick={next}
                  aria-label="Next category"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


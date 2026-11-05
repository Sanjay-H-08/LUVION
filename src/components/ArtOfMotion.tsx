import { useState, useEffect, useRef, useCallback } from "react"
import styles from "./ArtOfMotion.module.css"

export interface PaintSpec {
  id: string
  name: string
  category: string
  spec: string
  description: string
  swatchColor: string
  image: string
}

export const PAINT_VARIANTS: PaintSpec[] = [
  {
    id: "macadamia",
    name: "Macadamia Metallic",
    category: "PTS Sonderwunsch / Exclusive Manufaktur",
    spec: "Bespoke Haute Couture Commission · Brown-Tinted Carbon Fibre",
    description: "An extraordinary Sonderwunsch expression of the 992 GT3 RS. Macadamia Metallic bodywork complemented by brown-tinted visible carbon weave, bespoke forged wheels and tailored interior craftsmanship.",
    swatchColor: "#3d2a1f",
    image: "/assets/porsche/optimized/gt3rs_992_macadamia_hero_front34.webp"
  },
  {
    id: "icegrey",
    name: "Ice Grey Metallic",
    category: "Weissach Package / World Premiere Launch",
    spec: "Official Launch Specification · Pyro Red Lightweight Magnesium Wheels",
    description: "The iconic world premiere identity. Ice Grey Metallic punctuated by high-contrast Pyro Red aerodynamic endplates, lightweight wheels and 911 GT3 RS side branding.",
    swatchColor: "#d3d7da",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_front34_studio.webp"
  },
  {
    id: "tribute",
    name: "Pure White / Python Green",
    category: "Tribute to Carrera RS / 50th Anniversary",
    spec: "Special Edition · Python Green Magnesium Aerodynamics",
    description: "Honouring the historic 1973 Carrera RS 2.7. Pure White chassis offset by striking Python Green aerodynamics, forged wheels, mirror caps and matching interior contrast stitching.",
    swatchColor: "#229e3a",
    image: "/assets/porsche/optimized/gt3rs_992_tribute_pythongreen_front34.webp"
  },
  {
    id: "nordschleife",
    name: "Slate Grey 6601 / Nordschleife",
    category: "Motorsport Track Weapon / Lap Record",
    spec: "6:49.328 Official Lap Record · DRS Active Downforce",
    description: "Historic Slate Grey 6601 livery. Central-radiator cooling concept and active DRS rear wing producing 860 kg of downforce at 285 km/h around the Green Hell.",
    swatchColor: "#606468",
    image: "/assets/porsche/optimized/gt3rs_992_nordschleife_record_straight.webp"
  },
  {
    id: "abudhabi",
    name: "Abu Dhabi Sonderwunsch",
    category: "Sonderwunsch / Bespoke Commission",
    spec: "Collector Edition · Tailored Multi-Stage Finish",
    description: "One-of-a-kind bespoke commission by Porsche Centre Abu Dhabi and Exclusive Manufaktur. Designed to merge aerodynamic functional aggression with luxury automotive artistry.",
    swatchColor: "#1d3d52",
    image: "/assets/porsche/optimized/gt3rs_992_abudhabi_sonderwunsch_studio.webp"
  }
]

const SLIDE_DURATION = 5500

export default function ArtOfMotion() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Preload all vehicle images immediately to eliminate blank frames
  useEffect(() => {
    PAINT_VARIANTS.forEach((v) => {
      const img = new Image()
      img.src = v.image
    })
  }, [])

  // Viewport intersection observer to pause timer when section is not visible
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PAINT_VARIANTS.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PAINT_VARIANTS.length) % PAINT_VARIANTS.length)
    setProgress(0)
  }, [])

  const selectSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  // Timer loop for automatic cycling
  useEffect(() => {
    if (!isInView || isPaused) return

    const interval = 50
    const step = (interval / SLIDE_DURATION) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + step
      })
    }, interval)

    return () => clearInterval(timer)
  }, [isInView, isPaused, nextSlide])

  const currentVariant = PAINT_VARIANTS[currentIndex]

  return (
    <section
      ref={containerRef}
      className={styles.container}
      aria-label="The Art of Motion — GT3 RS Paint & Motion Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.titaniumEnvironment} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>09 / FORM IN ITS PUREST STATE</p>
          <h2 className={styles.title}>The Art of Motion</h2>
          <p className={styles.subtitle}>
            Official Porsche Sonderwunsch and factory photography. Authentic expressions of the 992-generation 911 GT3 RS across distinct paint and aerodynamic specifications.
          </p>
        </div>

        {/* Dominant Hero Vehicle Stage */}
        <div className={styles.stage}>
          {PAINT_VARIANTS.map((variant, idx) => (
            <img
              key={variant.id}
              src={variant.image}
              alt={`Porsche 911 GT3 RS in ${variant.name} — ${variant.category}`}
              className={`${styles.imageSlide} ${idx === currentIndex ? styles.imageSlideActive : ""}`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}

          <div className={styles.stageVignette} />

          {/* Navigation Arrows */}
          <button
            type="button"
            className={`${styles.navArrow} ${styles.navPrev}`}
            onClick={prevSlide}
            aria-label="Previous GT3 RS vehicle colour"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className={`${styles.navArrow} ${styles.navNext}`}
            onClick={nextSlide}
            aria-label="Next GT3 RS vehicle colour"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Color Metadata Overlay */}
          <div className={styles.colorOverlay}>
            <div className={styles.colorMeta}>
              <p className={styles.colorCategory}>{currentVariant.category}</p>
              <h3 className={styles.colorName}>{currentVariant.name}</h3>
              <p className={styles.colorDesc}>{currentVariant.description}</p>
            </div>

            <div className={styles.progressContainer}>
              <span className={styles.slideCounter}>
                {String(currentIndex + 1).padStart(2, "0")} / {String(PAINT_VARIANTS.length).padStart(2, "0")}
              </span>
              <div className={styles.progressBarBg}>
                <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Paint Swatches Selector Bar */}
        <div className={styles.swatchesBar} role="tablist" aria-label="Select paint finishes">
          {PAINT_VARIANTS.map((variant, idx) => {
            const isActive = idx === currentIndex
            return (
              <button
                key={variant.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.swatchBtn} ${isActive ? styles.swatchBtnActive : ""}`}
                onClick={() => selectSlide(idx)}
              >
                <span
                  className={styles.swatchPip}
                  style={{ backgroundColor: variant.swatchColor }}
                />
                <span>{variant.name}</span>
              </button>
            )
          })}
        </div>

        <p className={styles.disclosureFooter}>
          OFFICIAL PORSCHE PHOTOGRAPHY · SONDERWUNSCH · WEISSACH PACKAGE · TRIBUTE TO CARRERA RS
        </p>
      </div>
    </section>
  )
}


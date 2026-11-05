import { useState, useEffect, useCallback } from "react"
import styles from "./PorscheGallery.module.css"

export interface GalleryItem {
  id: string
  title: string
  category: string
  description: string
  image: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "wide-intimate",
    title: "Wide and intimate.",
    category: "World Premiere / Studio Profile",
    description: "A front three-quarter perspective reveals the relationship between the sculptural front wings, central hood radiator extraction ducts and lightweight forged wheels.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_front34_studio.webp"
  },
  {
    id: "track-circuit",
    title: "Built for the circuit.",
    category: "Motorsport / Nürburgring Nordschleife",
    description: "Seen in high-speed compression through the Carousel banking, every surface performs a specific thermodynamic or aerodynamic mission.",
    image: "/assets/porsche/optimized/gt3rs_992_nordschleife_record_carousel.webp"
  },
  {
    id: "sculpted-light",
    title: "Sculpted by light.",
    category: "Sonderwunsch / Bespoke Paint to Sample",
    description: "A serene studio study of the Sonderwunsch Macadamia Metallic 911 GT3 RS, highlighting its seamless integration of brown carbon weave and silhouette.",
    image: "/assets/porsche/optimized/gt3rs_992_macadamia_side.webp"
  },
  {
    id: "driver-perspective",
    title: "The driver’s perspective.",
    category: "Cockpit / Motorsport Ergonomics",
    description: "The cockpit centres around analog clarity and direct tactical control. Four rotary switches govern suspension bump, rebound, differential lock and traction stages.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_interior_steering.webp"
  },
  {
    id: "downforce-active",
    title: "Active downforce architecture.",
    category: "Aerodynamics / DRS Wind Tunnel",
    description: "The two-part swan-neck rear wing features an upper hydraulic blade capable of flattening into DRS low-drag configuration or braking vertically as an airbrake.",
    image: "/assets/porsche/optimized/gt3rs_992_icegrey_aero_wing_drs.webp"
  },
  {
    id: "heritage-tribute",
    title: "Heritage reborn.",
    category: "Special Edition / Tribute to Carrera RS",
    description: "Commemorating 50 years of the iconic 1973 911 Carrera RS 2.7, rendered in Pure White with Python Green magnesium wheels and graphics.",
    image: "/assets/porsche/optimized/gt3rs_992_tribute_pythongreen_front34.webp"
  }
]

export default function PorscheGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index)
  }

  const closeLightbox = () => {
    setActiveLightboxIndex(null)
  }

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length)
    }
  }, [activeLightboxIndex])

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
    }
  }, [activeLightboxIndex])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeLightboxIndex, nextLightbox, prevLightbox])

  return (
    <section className={styles.container} aria-label="Official Porsche 911 GT3 RS Photography Gallery">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>12 / THE GALLERY</p>
          <h2 className={styles.title}>Perspectives of Obsession.</h2>
          <p className={styles.subtitle}>
            A curated photographic exhibition of the 992-generation 911 GT3 RS. Authentic imagery from official Porsche archives, Sonderwunsch ateliers and circuit tests.
          </p>
        </div>

        {/* 6-Card Photographic Grid */}
        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openLightbox(idx)
                }
              }}
            >
              <img
                src={item.image}
                alt={`Porsche 911 GT3 RS — ${item.title}`}
                className={styles.cardImage}
                loading="lazy"
              />

              <div className={styles.cardOverlay}>
                <span className={styles.cardCategory}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              <div className={styles.zoomPip}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footerNote}>
          PORSCHE PHOTOGRAPHY / SIX PERSPECTIVES. ONE SINGULAR OBSESSION. CLICK ANY PHOTOGRAPH TO INSPECT HIGH-RESOLUTION ARCHIVE.
        </p>

        {/* Fullscreen Interactive Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div
            className={styles.lightboxBackdrop}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="High-resolution image lightbox"
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImageWrapper}>
                <button
                  type="button"
                  className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                  onClick={prevLightbox}
                  aria-label="Previous photograph"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <img
                  src={GALLERY_ITEMS[activeLightboxIndex].image}
                  alt={GALLERY_ITEMS[activeLightboxIndex].title}
                  className={styles.lightboxImage}
                />

                <button
                  type="button"
                  className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                  onClick={nextLightbox}
                  aria-label="Next photograph"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              <div className={styles.lightboxMeta}>
                <h3 className={styles.lightboxTitle}>
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </h3>
                <p className={styles.lightboxDesc}>
                  {GALLERY_ITEMS[activeLightboxIndex].description}
                </p>
                <span className={styles.lightboxCounter}>
                  {String(activeLightboxIndex + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


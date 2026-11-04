import { useState, useEffect } from "react"
import styles from "./Page.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

// Custom refined interactive components
import LuvionNav from "./components/LuvionNav"
import ScrollVideo3D from "./components/ScrollVideo3D"
import ArtOfMotion from "./components/ArtOfMotion"
import AnatomyOfPerformance from "./components/AnatomyOfPerformance"
import PerformanceSpecs from "./components/PerformanceSpecs"
import PorscheGallery from "./components/PorscheGallery"
import EditorialPerspectives from "./components/EditorialPerspectives"
import ExperiencePorscheForm from "./components/ExperiencePorscheForm"

export default function Page() {
  const [introFrame, setIntroFrame] = useState(0)

  useEffect(() => {
    initReveal()
  }, [])

  // Timed progression through the cinematic introduction sequence
  useEffect(() => {
    const frameDelays = [1300, 1100, 1100, 1300, 1300, 1500]
    if (introFrame < 6) {
      const timer = setTimeout(() => {
        setIntroFrame((prev) => prev + 1)
      }, frameDelays[introFrame] || 1300)
      return () => clearTimeout(timer)
    }
  }, [introFrame])

  const skipIntro = () => {
    setIntroFrame(6)
  }

  const scrollToAero = () => {
    const el = document.getElementById("section-08")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToIntro = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <LuvionNav />

      <div className={styles["desktop"]} id="top">
        {/* Sections 01–07: Cinematic Opening Experience */}
        <div className={styles["text"]} data-reveal="">
          {introFrame < 6 && (
            <button
              type="button"
              className={styles.skipIntroBtn}
              onClick={skipIntro}
              aria-label="Skip cinematic introduction"
            >
              Skip Intro
            </button>
          )}

          {/* 01 — The Opening */}
          <div className={`${styles["n-01-the-opening"]} ${styles.openingFrame} ${introFrame === 0 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text2"]} />
            <div className={styles["cinematic-tonal-gradient"]} />
            <div className={styles["rectangle-2"]} />
          </div>

          {/* 02 — The Light Sweep */}
          <div className={`${styles["n-02-the-light-sweep"]} ${styles.openingFrame} ${introFrame === 1 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text3"]} />
            <div className={styles["cinematic-tonal-gradient2"]} />
            <div className={styles["rectangle-22"]} />
            <div className={styles["rectangle-3"]} />
          </div>

          {/* 03 — Light Sweep End */}
          <div className={`${styles["n-03-light-sweep-end"]} ${styles.openingFrame} ${introFrame === 2 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text4"]} />
            <div className={styles["cinematic-tonal-gradient3"]}>
              <div className={styles["rectangle-23"]} />
            </div>
          </div>

          {/* 04 — The Reveal */}
          <div className={`${styles["n-04-the-reveal"]} ${styles.openingFrame} ${introFrame === 3 ? styles.openingFrameActive : ""}`}>
            <div className={styles["direct-side-highres-1"]} />
            <div className={styles["cinematic-tonal-gradient4"]} />
            <div className={styles["rectangle-24"]} />
          </div>

          {/* 05 — The Hero Zoom */}
          <div className={`${styles["n-05-the-hero-zoom"]} ${styles.openingFrame} ${introFrame === 4 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text5"]} />
            <div className={styles["cinematic-tonal-gradient5"]} />
            <div className={styles["rectangle-25"]} />
          </div>

          {/* 06 — The Editorial */}
          <div className={`${styles["n-06-the-editorial"]} ${styles.openingFrame} ${introFrame === 5 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text6"]} />
            <div className={styles["overlay-global"]} />
            <div className={styles["overlay-left-gradient"]} />
            <div className={styles["editorial-content"]}>
              <div className={styles["content-top"]}>
                <div className={styles["accent-line"]} />
                <div className={styles["text-stack"]}>
                  <p className={styles["label"]}>{"PORSCHE / MOTORSPORT"}</p>
                  <p className={styles["heading"]}>{"BORN FOR THE TRACK."}</p>
                  <div className={styles["text-rule"]} />
                  <p className={styles["supporting-text"]}>
                    {"Engineered with precision. Designed for uncompromising performance. The Porsche 911 GT3 RS brings motorsport engineering to the road."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 07 — The Performance Showcase */}
          <div className={`${styles["n-07-the-performance-showcase"]} ${styles.openingFrame} ${introFrame >= 6 ? styles.openingFrameActive : ""}`}>
            <div className={styles["text7"]} />
            <div className={styles["charcoal-atmosphere"]} />
            <div className={styles["editorial-shadow"]} />
            <div className={styles["lower-photographic-fade"]} />
            <div className={styles["closing-signature"]}>
              <div className={styles["model-signature"]}>
                <p className={styles["model"]}>{"911 GT3 RS"}</p>
                <p className={styles["brand-philosophy"]}>{"MOTORSPORT. IN ITS PUREST FORM."}</p>
              </div>
              <div className={styles["sequence-indicator"]}>
                <p className={styles["current-chapter"]}>{"07"}</p>
                <div className={styles["sequence-track"]} />
                <p className={styles["final-chapter"]}>{"07"}</p>
              </div>
            </div>
            <div className={styles["performance-statement"]}>
              <div className={styles["editorial-label"]}>
                <div className={styles["motorsport-accent"]} />
                <p className={styles["category"]}>{"PURPOSE IN EVERY DETAIL"}</p>
              </div>
              <p className={styles["headline"]}>{"NOTHINGWITHOUTPURPOSE."}</p>
              <div className={styles["statement-rule"]} />
              <p className={styles["supporting-copy"]}>
                {"Airflow shaped. Grip refined. Every surface of the 911 GT3 RS serves a single ambition: uncompromising performance."}
              </p>
              <div
                className={`${styles["discover-action"]} ${styles.interactiveAction}`}
                onClick={scrollToAero}
                role="button"
                tabIndex={0}
                aria-label="Explore the 911 GT3 RS"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    scrollToAero()
                  }
                }}
              >
                <p className={styles["action-label"]}>{"EXPLORE THE 911 GT3 RS"}</p>
                <div className={styles["explore-arrow"]} />
              </div>
            </div>
            <div className={styles["masthead"]}>
              <p className={styles["marque"]}>{"PORSCHE"}</p>
              <div className={styles["chapter"]}>
                <div className={styles["chapter-accent"]} />
                <p className={styles["chapter-title"]}>{"PERFORMANCE / 07"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 08: 3D / Scroll-controlled experience */}
        <div id="section-08" style={{ width: "100%" }} data-reveal="">
          <ScrollVideo3D />
        </div>

        {/* Section 09: Art of Motion */}
        <div id="section-09" style={{ width: "100%" }} data-reveal="">
          <ArtOfMotion />
        </div>

        {/* Section 10: Anatomy of Performance */}
        <div id="section-10" style={{ width: "100%" }} data-reveal="">
          <AnatomyOfPerformance />
        </div>

        {/* Section 10A: Inside the GT3 RS / Cockpit Editorial */}
        <div className={styles["text11"]} data-reveal="">
          <div className={styles["interior-editorial-content"]}>
            <p className={styles["interior-chapter"]}>{"INSIDE THE GT3 RS / PORSCHE NEWSROOM"}</p>
            <p className={styles["interior-title"]}>{"Everything in reach."}</p>
            <img
              className={styles["text12"]}
              src="/assets/porsche/optimized/gt3rs_992_icegrey_interior_cockpit.webp"
              alt="Official Porsche GT3 RS cockpit with steering wheel, central tachometer, carbon-fibre dashboard and centre console"
              loading="lazy"
            />
            <p className={styles["interior-editorial-caption"]}>
              {"The central tachometer. The steering-wheel controls. Carbon-fibre trim and purposeful materials. A cabin organised around the driver."}
            </p>
            <div className={styles["interior-detail-editorial"]}>
              <div className={styles["text13"]}>
                <img
                  className={styles["text14"]}
                  src="/assets/porsche/optimized/gt3rs_992_icegrey_interior_steering.webp"
                  alt="Official Porsche GT3 RS interior: Instruments, in focus."
                  loading="lazy"
                />
                <p className={styles["text15"]}>{"Instruments, in focus."}</p>
              </div>
              <div className={styles["text16"]}>
                <img
                  className={styles["text17"]}
                  src="/assets/porsche/optimized/gt3rs_992_macadamia_interior_cockpit.webp"
                  alt="Official Porsche GT3 RS interior: The centre console."
                  loading="lazy"
                />
                <p className={styles["text18"]}>{"The centre console."}</p>
              </div>
              <div className={styles["text19"]}>
                <img
                  className={styles["text20"]}
                  src="/assets/porsche/optimized/gt3rs_992_macadamia_interior_detail.webp"
                  alt="Official Porsche GT3 RS interior: Driver-focused seating."
                  loading="lazy"
                />
                <p className={styles["text21"]}>{"Driver-focused seating."}</p>
              </div>
              <div className={styles["text22"]}>
                <img
                  className={styles["text23"]}
                  src="/assets/porsche/optimized/gt3rs_992_tribute_pythongreen_interior.webp"
                  alt="Official Porsche GT3 RS interior: Materials, up close."
                  loading="lazy"
                />
                <p className={styles["text24"]}>{"Materials, up close."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: Performance */}
        <div id="section-11" style={{ width: "100%" }} data-reveal="">
          <PerformanceSpecs />
        </div>

        {/* Section 12: Gallery */}
        <div id="section-12" style={{ width: "100%" }} data-reveal="">
          <PorscheGallery />
        </div>

        {/* Section 13: Perspective of Obsession / Story */}
        <div id="section-13" style={{ width: "100%" }} data-reveal="">
          <EditorialPerspectives />
        </div>

        {/* Section 14: Experience Porsche Enquiry */}
        <div style={{ width: "100%" }} data-reveal="">
          <ExperiencePorscheForm />
        </div>

        {/* Section 15: Final Statement */}
        <div className={styles["n-15-final-statement"]} data-reveal="">
          <div className={styles["n-11-final-statement-content"]}>
            <p className={styles["chapter-label3"]}>{"LUVION / PORSCHE 911 GT3 RS"}</p>
            <p className={styles["section-title3"]}>{"EVERY LINE. A PURPOSE."}</p>
            <p className={styles["closing-statement"]}>
              {"Not simply designed to be seen. Engineered to be felt."}
            </p>
            <div
              className={styles["final-porsche-portrait"]}
              style={{
                backgroundImage: 'url("/assets/porsche/optimized/gt3rs_992_icegrey_direct_back.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className={styles["campaign-signature"]}>
              <p className={styles["luvion-signature"]}>{"LUVION"}</p>
              <div
                className={`${styles["back-to-intro"]} ${styles.interactiveAction}`}
                onClick={scrollToIntro}
                role="button"
                tabIndex={0}
                aria-label="Return back to introduction"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    scrollToIntro()
                  }
                }}
              >
                <p className={styles["return-label"]}>{"BACK TO INTRO"}</p>
              </div>
            </div>
            <p className={styles["the-art-of-performance"]}>{"THE ART OF PERFORMANCE"}</p>
            <p className={styles["text36"]}>
              {"LUVION / An independent automotive digital design study. Porsche and 911 GT3 RS are trademarks of Dr. Ing. h.c. F. Porsche AG. Visuals and specifications sourced from official Porsche media archives."}
            </p>
            <div
              className={`${styles["begin-your-enquiry"]} ${styles.interactiveAction}`}
              onClick={scrollToEnquiry}
              role="button"
              tabIndex={0}
              aria-label="Begin your enquiry"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  scrollToEnquiry()
                }
              }}
            >
              <p className={styles["begin-your-enquiry2"]}>{"BEGIN YOUR ENQUIRY"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import { useState } from "react"
import styles from "./PerformanceSpecs.module.css"

export default function PerformanceSpecs() {
  const [showTechnicalDrawer, setShowTechnicalDrawer] = useState(false)

  return (
    <section className={styles.container} aria-label="Porsche 911 GT3 RS Performance Figures">
      <div className={styles.bgAtmosphere} />
      <div className={styles.gradientVignette} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>11 / PERFORMANCE</p>
          <h2 className={styles.title}>Purpose, Measured.</h2>
          <p className={styles.subtitle}>
            Motorsport engineering transferred directly from the 911 RSR and 911 GT3 R to the road. Factory performance specifications for the 992-generation 911 GT3 RS.
          </p>
        </div>

        {/* 4 Core Performance Figures */}
        <div className={styles.figuresGrid}>
          <div className={styles.metricCard}>
            <p className={styles.metricValue}>
              525<span className={styles.metricAccent}>PS</span>
            </p>
            <p className={styles.metricLabel}>386 kW / NATURALLY ASPIRATED</p>
          </div>

          <div className={styles.metricCard}>
            <p className={styles.metricValue}>
              3.2<span className={styles.metricAccent}>s</span>
            </p>
            <p className={styles.metricLabel}>0–100 KM/H ACCELERATION</p>
          </div>

          <div className={styles.metricCard}>
            <p className={styles.metricValue}>
              296<span className={styles.metricAccent}>KM/H</span>
            </p>
            <p className={styles.metricLabel}>TRACK TOP SPEED</p>
          </div>

          <div className={styles.metricCard}>
            <p className={styles.metricValue}>
              465<span className={styles.metricAccent}>Nm</span>
            </p>
            <p className={styles.metricLabel}>MAXIMUM TORQUE @ 6,300 RPM</p>
          </div>
        </div>

        <p className={styles.disclaimerText}>
          992-generation 911 GT3 RS · Porsche factory figures. Official FIA homologated specifications.
        </p>

        {/* Action Toggle for In-Depth Telemetry */}
        <button
          type="button"
          className={styles.storyBtn}
          onClick={() => setShowTechnicalDrawer((prev) => !prev)}
          aria-expanded={showTechnicalDrawer}
        >
          <span>{showTechnicalDrawer ? "COLLAPSE TECHNICAL ARCHITECTURE" : "EXPLORE THE PORSCHE TECHNICAL STORY"}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: showTechnicalDrawer ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Technical Architecture Drawer */}
        {showTechnicalDrawer && (
          <div className={styles.telemetryDrawer}>
            <div className={styles.drawerGrid}>
              <div className={styles.specGroup}>
                <h4 className={styles.groupTitle}>Powertrain & Valvetrain</h4>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Engine Type</span>
                  <span className={styles.specVal}>4.0L Naturally Aspirated Boxer-6</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Displacement</span>
                  <span className={styles.specVal}>3,996 cm³</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Max RPM Redline</span>
                  <span className={styles.specVal}>9,000 RPM</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Transmission</span>
                  <span className={styles.specVal}>7-speed PDK with paddle shifters</span>
                </div>
              </div>

              <div className={styles.specGroup}>
                <h4 className={styles.groupTitle}>Aerodynamics & Downforce</h4>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Downforce @ 200 km/h</span>
                  <span className={styles.specVal}>409 kg</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Downforce @ 285 km/h</span>
                  <span className={styles.specVal}>860 kg (2x 991.2 GT3 RS)</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Wing System</span>
                  <span className={styles.specVal}>Hydraulic DRS active upper blade</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Radiator Architecture</span>
                  <span className={styles.specVal}>Central-radiator Le Mans concept</span>
                </div>
              </div>

              <div className={styles.specGroup}>
                <h4 className={styles.groupTitle}>Chassis & Dimensions</h4>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>DIN Curb Weight</span>
                  <span className={styles.specVal}>1,450 kg (Weissach package)</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Front Suspension</span>
                  <span className={styles.specVal}>Double-wishbone with aero links</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Wheels</span>
                  <span className={styles.specVal}>20" Front / 21" Rear Forged Center-lock</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specKey}>Nürburgring Lap Time</span>
                  <span className={styles.specVal}>6:49.328 (Jörg Bergmeister)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


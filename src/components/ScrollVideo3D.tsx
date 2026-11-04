import { useEffect, useRef, useState } from "react"
import styles from "./ScrollVideo3D.module.css"

export default function ScrollVideo3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  // Track video progress
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
    }
  }

  // Handle manual scrub
  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setProgress(val)
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (val / 100) * videoRef.current.duration
    }
  }

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {})
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Auto-pause video when off-screen to conserve GPU resources
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {})
              setIsPlaying(true)
            } else {
              videoRef.current.pause()
              setIsPlaying(false)
            }
          }
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.container} ref={containerRef} aria-label="3D vehicle rotation">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>08 / SPATIAL AERO STUDY</p>
          <h2 className={styles.title}>The 3D Experience</h2>
          <p className={styles.subtitle}>
            Aerodynamic geometry in motion. Continuous rotational study of the 992-generation 911 GT3 RS body architecture.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/assets/porsche/porsche-gt3rs-scroll-video.mp4"
            muted
            playsInline
            loop
            autoPlay
            onTimeUpdate={handleTimeUpdate}
          />

          <div className={styles.controlsBar}>
            <div className={styles.leftControls}>
              <button
                type="button"
                className={styles.playBtn}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>
              <span className={styles.statusText}>
                {isPlaying ? "360° Continuous Orbit" : "Interactive Scrub Active"}
              </span>
            </div>

            <div className={styles.scrubberContainer}>
              <input
                type="range"
                className={styles.scrubber}
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleScrub}
                aria-label="Orbit Scrub Position"
              />
            </div>

            <div className={styles.telemetryTag}>
              CFRP AERO ARCHITECTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

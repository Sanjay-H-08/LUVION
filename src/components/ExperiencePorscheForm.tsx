import { useState } from "react"
import styles from "./ExperiencePorscheForm.module.css"

export default function ExperiencePorscheForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    centre: "",
    paintColour: "Macadamia Metallic",
    preferredDate: "",
    message: ""
  })

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { fullName?: string; email?: string } = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name."
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Please provide a valid email address."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit locally for this showcase session
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      centre: "",
      paintColour: "Macadamia Metallic",
      preferredDate: "",
      message: ""
    })
  }

  return (
    <section className={styles.container} id="enquiry" aria-label="Experience Porsche Enquiry">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.chapterLabel}>14 / EXPERIENCE PORSCHE</p>
          <h2 className={styles.title}>Make It Personal.</h2>
          <p className={styles.subtitle}>
            Begin a conversation about the 911 GT3 RS. Tell us where you are and configure your preferred bespoke specification.
          </p>
        </div>

        <div className={styles.formLayout}>
          {/* Left Column: Official Porsche Portrait Hero */}
          <div className={styles.imageHero}>
            <img
              src="/assets/porsche/optimized/gt3rs_992_macadamia_hero_front34.webp"
              alt="Porsche 911 GT3 RS in Macadamia Metallic"
              className={styles.heroImage}
            />
            <div className={styles.imageGradient} />

            <div className={styles.imageBadge}>
              <p className={styles.badgeCategory}>PTS SONDERWUNSCH</p>
              <h3 className={styles.badgeTitle}>911 GT3 RS</h3>
              <p className={styles.badgeDesc}>
                Handcrafted individualization via Porsche Exclusive Manufaktur and Sonderwunsch Zuffenhausen.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formPane}>
            {isSubmitted ? (
              <div className={styles.confirmationCard}>
                <div className={styles.confirmIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.confirmTitle}>Enquiry Recorded</h3>
                <p className={styles.confirmCopy}>
                  Thank you, <strong>{formData.fullName}</strong>. Your interest in the Porsche 911 GT3 RS in <em>{formData.paintColour}</em> has been registered for this local design showcase session.
                  <br /><br />
                  <em>Note: LUVION is an independent automotive design study. Official vehicle allocations, order banks, and test drive experiences must be confirmed directly through an authorised Porsche Centre.</em>
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={handleReset}
                >
                  Configure Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="fullName" className={styles.fieldLabel}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                      placeholder="e.g. Alexander Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.fullName && <p className={styles.errorMessage}>{errors.fullName}</p>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.fieldLabel}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      placeholder="alexander@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.fieldLabel}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="centre" className={styles.fieldLabel}>
                      City / Preferred Porsche Centre
                    </label>
                    <input
                      id="centre"
                      name="centre"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Porsche Centre Zurich"
                      value={formData.centre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="paintColour" className={styles.fieldLabel}>
                      Preferred Paint Colour
                    </label>
                    <input
                      id="paintColour"
                      name="paintColour"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Macadamia Metallic"
                      value={formData.paintColour}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="preferredDate" className={styles.fieldLabel}>
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Q2 2026 / Next available"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="message" className={styles.fieldLabel}>
                      Additional Message / Bespoke Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Specify Weissach Package, Clubsport roll cage, or Sonderwunsch options..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  By submitting, you register your interest in this showcase study. This independent presentation is not an official Porsche booking system.
                </p>

                <button type="submit" className={styles.submitBtn}>
                  <span>Submit Personal Consultation Request</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

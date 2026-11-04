import { useEffect } from "react"
import styles from "./Page.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import EnquirySubmit from "./EnquirySubmit"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <>
    <div className={styles["desktop"]}>
      <div className={styles["text"]} data-reveal="">
        <div className={styles["n-01-the-opening"]}>
          <div className={styles["text2"]} />
          <div className={styles["cinematic-tonal-gradient"]} />
          <div className={styles["rectangle-2"]} />
        </div>
        <div className={styles["n-02-the-light-sweep"]}>
          <div className={styles["text3"]} />
          <div className={styles["cinematic-tonal-gradient2"]} />
          <div className={styles["rectangle-22"]} />
          <div className={styles["rectangle-3"]} />
        </div>
        <div className={styles["n-03-light-sweep-end"]}>
          <div className={styles["text4"]} />
          <div className={styles["cinematic-tonal-gradient3"]}>
            <div className={styles["rectangle-23"]} />
          </div>
        </div>
        <div className={styles["n-04-the-reveal"]}>
          <div className={styles["direct-side-highres-1"]} />
          <div className={styles["cinematic-tonal-gradient4"]} />
          <div className={styles["rectangle-24"]} />
        </div>
        <div className={styles["n-05-the-hero-zoom"]}>
          <div className={styles["text5"]} />
          <div className={styles["cinematic-tonal-gradient5"]} />
          <div className={styles["rectangle-25"]} />
        </div>
        <div className={styles["n-06-the-editorial"]}>
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
                <p className={styles["supporting-text"]}>{"Engineered with precision. Designed for uncompromising performance. The Porsche 911 GT3 RS brings motorsport engineering to the road."}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["n-07-the-performance-showcase"]}>
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
            <p className={styles["supporting-copy"]}>{"Airflow shaped. Grip refined. Every surface of the 911 GT3 RS serves a single ambition: uncompromising performance."}</p>
            <div className={styles["discover-action"]}>
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
      <div className={styles["n-08-the-3d-experience"]} data-reveal="">
        {/* TODO: external Framer module "ScrollVideo" — reimplement or swap for an npm equivalent */}
      </div>
      <div className={styles["text8"]} data-reveal="">
        <div className={styles["text9"]}>
          <p className={styles["chapter-label"]}>{"09 / FORM IN ITS PUREST STATE"}</p>
          <p className={styles["section-title"]}>{"THE ART OF MOTION"}</p>
          {/* TODO: external Framer module "CampaignSequence" — reimplement or swap for an npm equivalent */}
          <p className={styles["preview-disclosure"]}>{"OFFICIAL PORSCHE PHOTOGRAPHY / SONDERWUNSCH · LAVA ORANGE · SLATE GREY 6601 · MACADAMIA METALLIC"}</p>
        </div>
      </div>
      <div className={styles["n-10-anatomy-of-performance"]} data-reveal="">
        <div className={styles["text10"]}>
          <p className={styles["chapter-label2"]}>{"10 / ENGINEERED WITH INTENT"}</p>
          <p className={styles["section-title2"]}>{"ANATOMY OF PERFORMANCE"}</p>
          {/* TODO: external Framer module "CampaignSequence" — reimplement or swap for an npm equivalent */}
        </div>
      </div>
      <div className={styles["text11"]} data-reveal="">
        <div className={styles["interior-editorial-content"]}>
          <p className={styles["interior-chapter"]}>{"INSIDE THE GT3 RS / PORSCHE NEWSROOM"}</p>
          <p className={styles["interior-title"]}>{"Everything in reach."}</p>
          <img className={styles["text12"]} src={"https://framerusercontent.com/images/bKHV3ePUgI0mwYDUkXt5qRQoTv0.jpeg"} alt={"Official Porsche GT3 RS cockpit with steering wheel, central tachometer, carbon-fibre dashboard and centre console"} />
          <p className={styles["interior-editorial-caption"]}>{"The central tachometer. The steering-wheel controls. Carbon-fibre trim and purposeful materials. A cabin organised around the driver."}</p>
          <div className={styles["interior-detail-editorial"]}>
            <div className={styles["text13"]}>
              <img className={styles["text14"]} src={"https://framerusercontent.com/images/uN0Gx1soD1lAwdUXyqJW5WNml64.jpeg"} alt={"Official Porsche GT3 RS interior: Instruments, in focus."} />
              <p className={styles["text15"]}>{"Instruments, in focus."}</p>
            </div>
            <div className={styles["text16"]}>
              <img className={styles["text17"]} src={"https://framerusercontent.com/images/kBI6UapLdYjSWJGp7RBoeMjzOpw.jpeg"} alt={"Official Porsche GT3 RS interior: The centre console."} />
              <p className={styles["text18"]}>{"The centre console."}</p>
            </div>
            <div className={styles["text19"]}>
              <img className={styles["text20"]} src={"https://framerusercontent.com/images/39MCIipTk32XzSTTsrWaWSlaQ.jpeg"} alt={"Official Porsche GT3 RS interior: Driver-focused seating."} />
              <p className={styles["text21"]}>{"Driver-focused seating."}</p>
            </div>
            <div className={styles["text22"]}>
              <img className={styles["text23"]} src={"https://framerusercontent.com/images/5RlzJc7y1YzWblh0yRR0d2png.jpeg"} alt={"Official Porsche GT3 RS interior: Materials, up close."} />
              <p className={styles["text24"]}>{"Materials, up close."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["n-11-performance"]} data-reveal="">
        <div className={styles["n-11-performance-editorial-content"]}>
          <p className={styles["n-11-performance2"]}>{"11 / PERFORMANCE"}</p>
          <p className={styles["text25"]}>{"Purpose, measured."}</p>
          {/* TODO: external Framer module "CampaignSequence" — reimplement or swap for an npm equivalent */}
          <div className={styles["factory-performance-figures"]}>
            <div className={styles["n-386-kw-naturally-aspirated"]}>
              <p className={styles["n-525-ps"]}>{"525 PS"}</p>
              <p className={styles["n-386-kw-naturally-aspirated2"]}>{"386 kW / NATURALLY ASPIRATED"}</p>
            </div>
            <div className={styles["n-0-100-km-h"]}>
              <p className={styles["n-3-2-s"]}>{"3.2 s"}</p>
              <p className={styles["n-0-100-km-h2"]}>{"0–100 KM/H"}</p>
            </div>
            <div className={styles["km-h-top-speed"]}>
              <p className={styles["n-296"]}>{"296"}</p>
              <p className={styles["km-h-top-speed2"]}>{"KM/H / TOP SPEED"}</p>
            </div>
            <div className={styles["maximum-torque"]}>
              <p className={styles["n-465-nm"]}>{"465 Nm"}</p>
              <p className={styles["maximum-torque2"]}>{"MAXIMUM TORQUE"}</p>
            </div>
          </div>
          <p className={styles["text26"]}>{"992-generation 911 GT3 RS · Porsche factory figures. Conditions and market specifications apply."}</p>
          <div className={styles["porsche-specification-source"]}>
            <p className={styles["text27"]}>{"EXPLORE THE PORSCHE TECHNICAL STORY"}</p>
          </div>
        </div>
      </div>
      <div className={styles["n-12-the-gallery"]} data-reveal="">
        <div className={styles["text28"]}>
          <p className={styles["n-12-the-gallery2"]}>{"12 / THE GALLERY"}</p>
          <p className={styles["text29"]}>{"Perspectives of obsession."}</p>
          {/* TODO: external Framer module "CampaignSequence" — reimplement or swap for an npm equivalent */}
          <p className={styles["text30"]}>{"PORSCHE PHOTOGRAPHY / FOUR PERSPECTIVES. ONE SINGULAR OBSESSION."}</p>
        </div>
      </div>
      <div className={styles["n-13-the-story"]} data-reveal="">
        <div className={styles["n-13-the-story-content"]}>
          <p className={styles["n-13-the-story2"]}>{"13 / THE STORY"}</p>
          <p className={styles["text31"]}>{"Nothing without purpose."}</p>
          {/* TODO: external Framer module "CampaignSequence" — reimplement or swap for an npm equivalent */}
        </div>
      </div>
      <div className={styles["n-14-experience-porsche"]} data-reveal="">
        <div className={styles["n-14-experience-porsche-content"]}>
          <p className={styles["n-14-experience-porsche2"]}>{"14 / EXPERIENCE PORSCHE"}</p>
          <p className={styles["text32"]}>{"Make it personal."}</p>
          <p className={styles["text33"]}>{"Begin a conversation about the 911 GT3 RS. Tell us where you are and how to reach you."}</p>
          <div className={styles["text34"]} />
          <div className={styles["test-drive-enquiry"]}>
            <div className={styles["full-name"]}>
              <p className={styles["full-name2"]}>{"Full name"}</p>
              <input className={styles["form-input"]} type="text" name="full-name" aria-label={"Full name"} />
            </div>
            <div className={styles["email-address"]}>
              <p className={styles["email-address2"]}>{"Email address"}</p>
              <input className={styles["form-input"]} type="email" name="email-address" aria-label={"Email address"} />
            </div>
            <div className={styles["phone-number"]}>
              <p className={styles["phone-number2"]}>{"Phone number"}</p>
              <input className={styles["form-input"]} type="tel" name="phone-number" aria-label={"Phone number"} />
            </div>
            <div className={styles["city-preferred-porsche-centre"]}>
              <p className={styles["city-preferred-porsche-centre2"]}>{"City / preferred Porsche Centre"}</p>
              <input className={styles["form-input"]} type="text" name="city-preferred-porsche-centre" aria-label={"City / preferred Porsche Centre"} />
            </div>
            <div className={styles["preferred-paint-colour"]}>
              <p className={styles["preferred-paint-colour2"]}>{"Preferred paint colour"}</p>
              <input className={styles["form-input"]} type="text" name="preferred-paint-colour" aria-label={"Preferred paint colour"} />
            </div>
            <div className={styles["preferred-date"]}>
              <p className={styles["preferred-date2"]}>{"Preferred date"}</p>
              <input className={styles["form-input"]} type="text" name="preferred-date" aria-label={"Preferred date"} />
            </div>
            <div className={styles["additional-message"]}>
              <p className={styles["additional-message2"]}>{"Additional message"}</p>
              <textarea className={styles["form-input"]} name="additional-message" rows={5} aria-label={"Additional message"} />
            </div>
            <p className={styles["text35"]}>{"By submitting, you ask LUVION to contact you about this enquiry. This independent showcase is not an official Porsche booking service. Availability and test drives must be confirmed with an authorised Porsche Centre."}</p>
            <EnquirySubmit variant="Ready" />
          </div>
        </div>
      </div>
      <div className={styles["n-15-final-statement"]} data-reveal="">
        <div className={styles["n-11-final-statement-content"]}>
          <p className={styles["chapter-label3"]}>{"LUVION / PORSCHE 911 GT3 RS"}</p>
          <p className={styles["section-title3"]}>{"EVERY LINE. A PURPOSE."}</p>
          <p className={styles["closing-statement"]}>{"Not simply designed to be seen. Engineered to be felt."}</p>
          <div className={styles["final-porsche-portrait"]} />
          <div className={styles["campaign-signature"]}>
            <p className={styles["luvion-signature"]}>{"LUVION"}</p>
            <div className={styles["back-to-intro"]}>
              <p className={styles["return-label"]}>{"BACK TO INTRO"}</p>
            </div>
          </div>
          <p className={styles["the-art-of-performance"]}>{"THE ART OF PERFORMANCE"}</p>
          <p className={styles["text36"]}>{"LUVION / An independent automotive design study. Porsche and 911 GT3 RS are trademarks of Dr. Ing. h.c. F. Porsche AG. AI visuals are illustrative."}</p>
          <div className={styles["begin-your-enquiry"]}>
            <p className={styles["begin-your-enquiry2"]}>{"BEGIN YOUR ENQUIRY"}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles["luvion-cinematic-campaign-moodboard"]}>
      <p className={styles["text"]}>{"LUVION / PORSCHE 911 GT3 RS"}</p>
      <p className={styles["text2"]}>{"Precision. Without spectacle."}</p>
      <p className={styles["text3"]}>{"Cinematic automotive editorial / Visual direction"}</p>
      <div className={styles["studio-controlled-light"]} />
      <div className={styles["pit-lane-editorial-space"]} />
      <div className={styles["track-purposeful-performance"]} />
      <p className={styles["n-01-light-reveal"]}>{"01 / LIGHT & REVEAL"}</p>
      <p className={styles["text4"]}>{"Dark, blurred opening.A narrow reflection.A sharp, deliberate reveal."}</p>
      <p className={styles["n-02-editorial"]}>{"02 / EDITORIAL"}</p>
      <p className={styles["text5"]}>{"Full-bleed photography.Clear, confident typography.Negative space, not panels."}</p>
      <p className={styles["n-03-restraint"]}>{"03 / RESTRAINT"}</p>
      <p className={styles["text6"]}>{"Racing red as punctuation.Charcoal, white and greys.No decorative effects."}</p>
      <p className={styles["text7"]}>{"PRESERVATION / Seven original frames and their prototype connections remain unchanged on this page.REFINED DESIGN / Seven working copies are on 04 — Website. Interactions have not been rebuilt or refined.PHOTOGRAPHY / Porsche Newsroom images used for design reference; commercial usage requires clearance."}</p>
    </div>
    </>
  )
}

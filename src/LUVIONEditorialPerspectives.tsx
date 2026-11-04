import styles from "./LUVIONEditorialPerspectives.module.css"

interface Props {
  variant?: "Variant 1" | "Built for the circuit." | "Sculpted by light." | "The driver’s perspective."
}

export default function LUVIONEditorialPerspectives({
  variant = "Variant 1",
}: Props) {
  return (
    <div className={styles["variant-1"]} data-variant={variant}>
      <div className={styles["changing-editorial-perspectives"]}>
        <img className={styles["wide-and-intimate"]} src={"https://framerusercontent.com/images/USGivmfSqAR3Z8Qhi3pzCXRJFag.jpg"} alt={"Authentic Porsche 911 GT3 RS editorial photograph"} />
        <div className={styles["track-action"]} />
        <div className={styles["studio-perspective"]} />
        <div className={styles["the-driver-s-perspective"]} />
      </div>
      <div className={styles["editorial-captions"]}>
        <div className={styles["text"]}>
          <p className={styles["text2"]}>{"Wide and intimate."}</p>
          <p className={styles["editorial-detail"]}>{"Editorial detail"}</p>
        </div>
        <div className={styles["text3"]}>
          <p className={styles["text4"]}>{"Built for the circuit."}</p>
          <p className={styles["editorial-detail2"]}>{"Editorial detail"}</p>
        </div>
        <div className={styles["text5"]}>
          <p className={styles["text6"]}>{"Sculpted by light."}</p>
          <p className={styles["editorial-detail3"]}>{"Editorial detail"}</p>
        </div>
        <div className={styles["text7"]}>
          <p className={styles["text8"]}>{"The driver’s perspective."}</p>
          <p className={styles["editorial-detail4"]}>{"Editorial detail"}</p>
        </div>
        <div className={styles["editorial-text-sizing-guide"]}>
          <p className={styles["text9"]}>{"The driver’s perspective."}</p>
          <p className={styles["editorial-detail5"]}>{"Editorial detail"}</p>
        </div>
      </div>
      <div className={styles["editorial-navigation"]}>
        <div className={styles["previous-perspective"]}>
          <p className={styles["previous"]}>{"Previous"}</p>
        </div>
        <div className={styles["next-perspective"]}>
          <p className={styles["previous2"]}>{"Previous"}</p>
        </div>
        <p className={styles["current-perspective"]}>{"Current perspective"}</p>
      </div>
    </div>
  )
}

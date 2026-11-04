import styles from "./LUVIONPaintStudio.module.css"

interface Props {
  variant?: "Guards Red" | "Lava Orange" | "Shark Blue" | "Python Green" | "Racing Yellow" | "GT Silver" | "White" | "Black"
}

export default function LUVIONPaintStudio({
  variant = "Guards Red",
}: Props) {
  return (
    <div className={styles["guards-red"]} data-variant={variant}>
      <div className={styles["consistent-studio-composition"]}>
        <div className={styles["text"]} />
        <div className={styles["text2"]} />
        <div className={styles["text3"]} />
        <div className={styles["text4"]} />
        <div className={styles["text5"]} />
        <div className={styles["text6"]} />
        <div className={styles["white-ai-paint-study"]} />
        <div className={styles["black-ai-paint-study"]} />
      </div>
      <p className={styles["guards-red2"]}>{"Guards Red"}</p>
      <div className={styles["paint-selection"]}>
        <div className={styles["guards-red3"]}>
          <div className={styles["guards-red-paint-swatch"]} />
        </div>
        <div className={styles["lava-orange"]}>
          <div className={styles["lava-orange-paint-swatch"]} />
        </div>
        <div className={styles["shark-blue"]}>
          <div className={styles["shark-blue-paint-swatch"]} />
        </div>
        <div className={styles["python-green"]}>
          <div className={styles["python-green-paint-swatch"]} />
        </div>
        <div className={styles["racing-yellow"]}>
          <div className={styles["racing-yellow-paint-swatch"]} />
        </div>
        <div className={styles["gt-silver"]}>
          <div className={styles["gt-silver-paint-swatch"]} />
        </div>
        <div className={styles["white"]}>
          <div className={styles["white-paint-swatch"]} />
        </div>
        <div className={styles["black"]}>
          <div className={styles["black-paint-swatch"]} />
        </div>
      </div>
    </div>
  )
}

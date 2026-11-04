import styles from "./LUVIONAnatomyExplorer.module.css"

interface Props {
  variant?: "Aerodynamics" | "EXTERIOR" | "INTERIOR" | "COCKPIT" | "PERFORMANCE"
}

export default function LUVIONAnatomyExplorer({
  variant = "Aerodynamics",
}: Props) {
  return (
    <div className={styles["aerodynamics"]} data-variant={variant}>
      <div className={styles["engineering-categories"]}>
        <div className={styles["aerodynamics2"]}>
          <p className={styles["aerodynamics3"]}>{"AERODYNAMICS"}</p>
        </div>
        <div className={styles["exterior"]}>
          <p className={styles["exterior2"]}>{"EXTERIOR"}</p>
        </div>
        <div className={styles["interior"]}>
          <p className={styles["interior2"]}>{"INTERIOR"}</p>
        </div>
        <div className={styles["cockpit"]}>
          <p className={styles["cockpit2"]}>{"COCKPIT"}</p>
        </div>
        <div className={styles["performance"]}>
          <p className={styles["performance2"]}>{"PERFORMANCE"}</p>
        </div>
      </div>
      <div className={styles["cinematic-engineering-photography"]}>
        <img className={styles["aerodynamics-porsche-newsroom"]} src={"https://framerusercontent.com/images/gg9rgwMLF0kWbuemmxyEU7mXg0.jpeg"} alt={"Official Porsche 911 GT3 RS aerodynamics photograph"} />
        <div className={styles["exterior-porsche-newsroom"]} />
        <div className={styles["interior-porsche-newsroom"]} />
        <div className={styles["cockpit-porsche-newsroom"]} />
        <div className={styles["performance-porsche-newsroom"]} />
      </div>
      <div className={styles["engineering-information"]}>
        <div className={styles["synchronized-engineering-captions"]}>
          <div className={styles["aerodynamics-information"]}>
            <p className={styles["progress"]}>{"Progress"}</p>
            <p className={styles["heading"]}>{"Heading"}</p>
            <p className={styles["description"]}>{"Description"}</p>
            <p className={styles["annotations"]}>{"Annotations"}</p>
          </div>
          <div className={styles["exterior-information"]}>
            <p className={styles["progress2"]}>{"Progress"}</p>
            <p className={styles["heading2"]}>{"Heading"}</p>
            <p className={styles["description2"]}>{"Description"}</p>
            <p className={styles["annotations2"]}>{"Annotations"}</p>
          </div>
          <div className={styles["interior-information"]}>
            <p className={styles["progress3"]}>{"Progress"}</p>
            <p className={styles["heading3"]}>{"Heading"}</p>
            <p className={styles["description3"]}>{"Description"}</p>
            <p className={styles["annotations3"]}>{"Annotations"}</p>
          </div>
          <div className={styles["cockpit-information"]}>
            <p className={styles["progress4"]}>{"Progress"}</p>
            <p className={styles["heading4"]}>{"Heading"}</p>
            <p className={styles["description4"]}>{"Description"}</p>
            <p className={styles["annotations4"]}>{"Annotations"}</p>
          </div>
          <div className={styles["performance-information"]}>
            <p className={styles["progress5"]}>{"Progress"}</p>
            <p className={styles["heading5"]}>{"Heading"}</p>
            <p className={styles["description5"]}>{"Description"}</p>
            <p className={styles["annotations5"]}>{"Annotations"}</p>
          </div>
          <div className={styles["engineering-text-sizing-guide"]}>
            <p className={styles["progress6"]}>{"Progress"}</p>
            <p className={styles["heading6"]}>{"Heading"}</p>
            <p className={styles["description6"]}>{"Description"}</p>
            <p className={styles["annotations6"]}>{"Annotations"}</p>
          </div>
        </div>
        <div className={styles["previous-and-next"]}>
          <div className={styles["previous-category"]}>
            {/* TODO: external Framer module "Arrow Left" — reimplement or swap for an npm equivalent */}
          </div>
          <div className={styles["next-category"]}>
            {/* TODO: external Framer module "Arrow Right" — reimplement or swap for an npm equivalent */}
          </div>
        </div>
      </div>
    </div>
  )
}

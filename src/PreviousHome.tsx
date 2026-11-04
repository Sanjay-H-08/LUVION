import { useEffect } from "react"
import styles from "./PreviousHome.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]} />
  )
}

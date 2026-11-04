import styles from "./EnquirySubmit.module.css"

interface Props {
  variant?: "Ready" | "Sending" | "Success" | "Error" | "Incomplete"
}

export default function EnquirySubmit({
  variant = "Ready",
}: Props) {
  return (
    <div className={styles["ready"]} data-variant={variant}>
      <p className={styles["send-enquiry"]}>{"SEND ENQUIRY"}</p>
    </div>
  )
}

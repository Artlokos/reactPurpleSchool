import styles from "./Paragraph.module.css";

function Paragraph({ value }) {
  return <p className={styles["paragraph"]}>{value}</p>;
}
export default Paragraph;

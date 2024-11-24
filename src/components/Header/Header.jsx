import styles from "./Header.module.css";

function Header({ value }) {
  return <h1 className={styles["header-1"]}>{value}</h1>;
}
export default Header;

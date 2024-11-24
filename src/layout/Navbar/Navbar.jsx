import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles["navbar"]}>
        <div>
          <img src="../../../public/navbarLogo.svg" alt="" />
        </div>
        <ul className={styles["navbar-list"]}>
          <li>
            <a href="#">Поиск фильмов</a>
          </li>
          <li>
            <a href="#">Мои фильмы</a>
            <div className={styles["navbar-list-counter"]}></div>
          </li>
          <li>
            <a href="#form-login">Войти</a>
            <img src="../../../public/login.svg" alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;

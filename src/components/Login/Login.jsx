// import Button from "../Button/Button";
// import UniInput from "../UniInput/UniInput";
import styles from "./Login.module.css";
import { useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage.hook";

function Login() {
  const [profiles, saveProfile] = useLocalStorage([]);
  const loginInput = useRef(null);
  const loginButton = useRef(null);

  const addNewProfile = profile => {
    saveProfile([...profiles.map(i => ({
      ...i
    })),{
      userName: profile.userName,
      isLoggines: false
    }]);
  };

  return (
    <>
      <form id="form-login" className={styles["login-form"]} onSubmit={addNewProfile}>
        <h2 className={styles["login-header"]}>Вход</h2>
        {/* <UniInput ref={loginInput} name="Login" placeholder="Ваше имя" /> */}
        <input
          type="text"
          ref={loginInput}
          placeholder="Ваше имя"
          required
          // onChange={e => setProfile(e.target.value)}
          className={styles["login-name"]}
        />
        {/* <Button
          ref={loginButton}
          type="submit"
          text="Войти в профиль"
          onClick={addNewProfile}
        /> Я использовал изначально свой компонент, но не смог сделать ему тип submit */}
        <button type="submit" className={`${styles.login_button} ${styles.accent}`} ref={loginButton}>Войти в профиль</button>
      </form>
    </>
  );
}
export default Login;
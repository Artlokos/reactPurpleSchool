import styles from "./Login.module.css";
import { useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage.hook";
import UniInput from "../UniInput/UniInput";
import Button from "../Button/Button";

function Login() {
  const [profiles, saveProfile] = useLocalStorage(["Login"]);
  const loginInput = useRef(null);
  const loginButton = useRef(null);

  const addNewProfile = profile => {
    saveProfile([
      ...profiles.map((i) => ({ ...i })),
      {
        userName: profile.userName,
        isLoggined: false
      }
    ]);
  };

  return (
    <>
      <form
        id="form-login"
        className={styles["login-form"]}
        onSubmit={addNewProfile}
      >
        <h2 className={styles["login-header"]}>Вход</h2>
        <UniInput
          ref={loginInput}
          className={styles["login-name"]}
          name="Login"
          placeholder="Ваше имя"
        />
        <Button
          ref={loginButton}
          type="submit"
          text="Войти в профиль"
          onClick={addNewProfile}
        />
      </form>
    </>
  );
}
export default Login;

import Button from "../Button/Button";
import "./Login.css";

function Login() {
  return (
    <>
      <form className="login-form" action="">
        <h2 className="login-header">Вход</h2>
        <input type="text" className="login-name" />
        <Button text={"Войти в профиль"} />
      </form>
    </>
  );
}
export default Login;

import { forwardRef } from "react";
import styles from "./Button.module.css";

// eslint-disable-next-line react/display-name
const Button = forwardRef(({ text, onClick, type }, ref) => (
  <>
    <button
      type={type}
      ref={ref}
      className={`${styles.button} ${styles.accent}`}
      onClick={onClick}
    >
      {text}
    </button>
  </>
));

export default Button;

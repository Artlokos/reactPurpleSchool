import { forwardRef } from "react";
import styles from "./UniInput.module.css";

// eslint-disable-next-line react/display-name
const UniInput = forwardRef(({ name, placeholder }, ref) => {
  return (
    <>
      <input
        type="text"
        ref={ref}
        name={name}
        placeholder={placeholder}
        className={styles["uniInput"]}
      />
    </>
  );
}
);

export default UniInput;

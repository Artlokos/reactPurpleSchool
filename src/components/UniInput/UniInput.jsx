import { forwardRef } from "react";
import styles from "./UniInput.module.css";
import cn from "classnames";

// eslint-disable-next-line react/display-name
const UniInput = forwardRef(({ name, placeholder, className, ...props }, ref) => {
  return (
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        className={cn(className, styles["uniInput"],{
          [styles["invalid"]]: !props.isValid,
          [styles["input-title"]]: props.appearence === "title"
        })}/>
        );
});

export default UniInput;

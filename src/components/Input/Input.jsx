import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';


const Input = forwardRef(function Input({className, inValid=true, appearence, ...props}, ref) {

    return (
        <input
        {...props}
        // type={type}
        // onChange={onChange}
        ref={ref}
        // value={value}
        // name="title"
        className={cn(className, styles['input'], {
          [styles['invalid']]: !inValid,
          [styles['input-title']]: appearence === 'title'
        })} 
      />
    );
});

export default Input;
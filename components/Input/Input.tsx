import { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";
import cn from "classnames";

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.inputWrapper, className)}>
        <input
          ref={ref}
          placeholder="fwefewf"
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error ? (
          <span className={styles.errorMessage}>{error.message}</span>
        ) : null}
      </div>
    );
  }
);

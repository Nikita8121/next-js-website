import React from "react";
import styles from "./P.module.css";
import { PProps } from "./P.props";
import cn from "classnames";

export const P = ({
  children,
  fontSize = "m",
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: fontSize == "s",
        [styles.medium]: fontSize == "m",
        [styles.large]: fontSize == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

import React from "react";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  children,
  size = "s",
  color = "primary",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.primary]: color == "primary",
        [styles.green]: color == "green",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
      })}
      {...props}
    >
      {href ? (
        <a href={href} className={styles.link}>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
};

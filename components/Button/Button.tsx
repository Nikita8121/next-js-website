import { motion, useMotionValue } from "framer-motion";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";
import { useEffect } from 'react';

export const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);


  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </motion.button>
  );
};

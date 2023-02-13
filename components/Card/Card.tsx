import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";

export const Card = ({
  children,
  color = "white",
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};
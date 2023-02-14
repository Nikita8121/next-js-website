import styles from "./TextArea.module.css";
import { TextAreaProps } from "./TextArea.props";
import cn from "classnames";

export const TextArea = ({
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <textarea
      placeholder="fwefewf"
      className={cn(className, styles.textarea)}
      {...props}
    />
  );
};

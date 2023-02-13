import React from "react";
import styles from "./Advantage.module.css";
import { AdvantageProps } from "./Advantage.props";
import AdvantageIcon from "./advantage.svg";
import cn from "classnames";
import { P } from "..";

export const Advantage = ({
  title,
  description,
}: AdvantageProps): JSX.Element => {
  return (
    <div className={styles.advantage}>
      <div className={styles.left}>
        <AdvantageIcon />
        {description ? <div className={styles.line}></div> : null}
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{title}</div>
        <P fontSize="l">{description}</P>
      </div>
    </div>
  );
};

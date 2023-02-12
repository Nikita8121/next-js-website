import { Card } from "../Card/Card";
import styles from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import RateIcon from "./rate.svg";
import cn from "classnames";

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={cn(styles.hh)}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.salaryValue}>{count}</div>
        <div className={styles.rate}>
          <RateIcon />
          <RateIcon />
          <RateIcon />
        </div>
      </Card>
    </div>
  );
};

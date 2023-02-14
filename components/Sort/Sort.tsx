import styles from "./Sort.module.css";
import { SortProps, SortEnum } from "./Sort.props";
import SortIcon from "./sort.svg";
import cn from "classnames";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={styles.sortIcon} />
        <span>По&nbsp;рейтингу</span>
      </div>
      <div
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} />
        <span>По&nbsp;цене</span>
      </div>
    </div>
  );
};

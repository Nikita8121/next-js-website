import React from "react";
import styles from "./P.module.css";
import { SortProps } from "./Sort.props";
import cn from "classnames";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return <div className={cn(className)} {...props}>
    
  </div>;
};

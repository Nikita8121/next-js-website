import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div className={styles.protected}>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>
      <div className={styles.links}>
        <a className={styles.link}>Пользовательское соглашение</a>
        <a className={styles.link}>Политика конфиденциальности</a>
      </div>
    </div>
  );
};

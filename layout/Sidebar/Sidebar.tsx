import { Menu } from "../Menu/Menu";
import { Search } from "@/components";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import Logo from "../logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};

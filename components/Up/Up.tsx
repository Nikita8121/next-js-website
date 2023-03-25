import styles from "./Up.module.css";
import { useScrollY } from "../../hooks/scrollY.hook";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    let opacity = (y / document.body.scrollHeight) * 5;
    if (opacity > 1) {
      opacity = 1;
    }
    controls.start({ opacity });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      animate={controls}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon onClick={scrollToTop} appearance="primary" icon="up" />
    </motion.div>
  );
};

import styles from "./Up.module.css";
import UpIcon from "./up.svg";
import { useScrollY } from "../../hooks/scrollY.hook";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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
    <motion.button
      animate={controls}
      onClick={scrollToTop}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};

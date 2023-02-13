import { Advantage, Htag } from "../index";
import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import cn from "classnames";

export const Advantages = ({
  advantages,
  text,
}: AdvantagesProps): JSX.Element => {
  return (
    <div className={styles.advantages}>
      <Htag className={styles.title} tag="h2">
        Преимущества
      </Htag>
      {advantages.map(({ title, description, _id: id }) => (
        <Advantage key={id} title={title} description={description} />
      ))}
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

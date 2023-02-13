import styles from "./Skills.module.css";
import { Tag, Htag } from "../index";
import { SkillsProps } from "./Skills.props";
import cn from "classnames";

export const Skills = ({ skills }: SkillsProps): JSX.Element => {
  return (
    <div className={styles.skills}>
      <Htag className={styles.title}>Получаемые навыки</Htag>
      <div className={styles.tagsWrapper}>
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
};

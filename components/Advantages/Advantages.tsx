import { Advantage, P } from "../index";
import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import cn from "classnames";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div className={styles.advantages}>
      <div className={styles.title}>Преимущества</div>
      {advantages.map(({ title, description, _id: id }) => (
        <Advantage key={id} title={title} description={description} />
      ))}
      <P>
        При завершении очередного проекта над графикой, специалист всегда задает
        себе вопрос о дальнейших перспективах. Отличие профессиональных
        дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
        логотип новой компании, а завтра вполне можно переключиться на
        иллюстрацию культовой книги.
      </P>
    </div>
  );
};

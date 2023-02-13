import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag, Tag, HhData, Advantages, Skills } from "../../components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/topPage.interface";

const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products ? (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        ) : null}
        <span>Sort</span>
      </div>
      <div>
        {products
          ? products.map((product) => (
              <div key={product._id}>{product.title}</div>
            ))
          : null}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products ? (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        ) : null}
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
      <Advantages advantages={page.advantages} />
      <Skills skills={page.tags} />
    </div>
  );
};

export default TopPageComponent;

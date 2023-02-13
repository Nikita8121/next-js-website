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
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages ? (
        <Advantages text={page.seoText} advantages={page.advantages} />
      ) : null}
      {page.tags ? <Skills skills={page.tags} /> : null}
    </div>
  );
};

export default TopPageComponent;

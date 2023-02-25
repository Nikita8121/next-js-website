import { TopPageComponentProps } from "./TopPageComponent.props";
import {
  Htag,
  Tag,
  HhData,
  Advantages,
  Skills,
  Sort,
  Product,
} from "../../components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/topPage.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useReducer, useEffect } from "react";
import { sortReducer } from "./sort.reducer";

const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  useEffect(() => {
    dispatchSort({
      type: sort,
    });
  }, [products]);

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatchSort({
      type: sort,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {sortedProducts ? (
          <Tag color="grey" size="m">
            {sortedProducts.length}
          </Tag>
        ) : null}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts
          ? sortedProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))
          : null}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {sortedProducts ? (
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

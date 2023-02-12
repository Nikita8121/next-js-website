import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag, Tag, Card, HhData } from "../../components";
import styles from "./TopPageComponent.module.css";

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
      <HhData {...page.hh} />
    </div>
  );
};

export default TopPageComponent;

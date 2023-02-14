import styles from "./Product.module.css";
import { ProductProps } from "./Product.props";
import Image from "next/image";
import { Card } from "..";
import cn from "classnames";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card>
      <div className={styles.logo}>
        <Image
          width={70}
          height={70}
          src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
          alt={product.title}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className=""></div>
    </Card>
  );
};

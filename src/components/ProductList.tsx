import React from "react";
import Image from "next/image";
import styles from "../styles/productlist.module.css"; // CSS modülünü import ettik

interface Product {
  _id: string;
  image: string;
  title: string;
  content: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  products,
}) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product._id} className={styles.card}>
          <Image
            src={product.image}
            alt={product.title}
            className={styles.productImage}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>
              {product.title}
            </h2>
            <p className={styles.content}>
              {product.content}
            </p>
            <p className={styles.price}>{product.price}₺</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

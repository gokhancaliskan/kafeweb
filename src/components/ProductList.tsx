import React from "react";

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
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="card">
          <figure>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.content}</p>
            <p className="price">{product.price}₺</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

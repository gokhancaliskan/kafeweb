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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="card bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.content}</p>
            <p className="text-lg font-bold">
              {product.price}₺
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

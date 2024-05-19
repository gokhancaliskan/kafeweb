import React from "react";
import Image from "next/image";

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
    <div className="">
      {products.map((product) => (
        <div key={product._id} className="card">
          <figure>
            <Image
              src={"/logos/fairytalelogo.svg"}
              alt={product.title}
              className="card-image"
              width={30}
              height={30}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.content}</p>
            <p className="card-price">{product.price}₺</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

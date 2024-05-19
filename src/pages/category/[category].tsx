import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`/api/posts?category=${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [category]);

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;

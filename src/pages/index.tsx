import { useState, useEffect } from "react";
import Header from "../components/Header";
import MainArea from "../components/MainArea";
import CategoryArea from "../components/CategoryArea";
import ProductList from "../components/ProductList";

interface Post {
  _id: string;
  main: string;
  category: string;
  image: string;
  title: string;
  content: string;
  price: number;
  number: number;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedMain, setSelectedMain] = useState<
    string | null
  >(null);
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleMainClick = (main: string) => {
    setSelectedMain(main);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategories = (main: string) => {
    const categories = posts
      .filter((post) => post.main === main && post.category)
      .map((post) => post.category);
    return [...new Set(categories)]; // Unique kategoriler
  };

  const getPostsByMainAndCategory = (
    main: string,
    category?: string
  ) => {
    if (category) {
      return posts.filter(
        (post) =>
          post.main === main && post.category === category
      );
    }
    return posts.filter(
      (post) =>
        post.main === main &&
        (!post.category || post.category === "")
    );
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {!selectedMain ? (
          <MainArea
            mainItems={posts}
            onMainClick={handleMainClick}
          />
        ) : (
          <div>
            <MainArea
              mainItems={posts}
              onMainClick={handleMainClick}
            />
            {getCategories(selectedMain).length > 0 ? (
              <div>
                <CategoryArea
                  categories={getCategories(selectedMain)}
                  onCategoryClick={handleCategoryClick}
                  selectedCategory={selectedCategory ?? ""}
                />
                <ProductList
                  products={getPostsByMainAndCategory(
                    selectedMain,
                    selectedCategory ?? ""
                  )}
                />
              </div>
            ) : (
              <ProductList
                products={getPostsByMainAndCategory(
                  selectedMain
                )}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

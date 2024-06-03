import { useState, useEffect } from "react";
import MainArea from "../components/MainArea";
import CategoryArea from "../components/CategoryArea";
import ProductList from "../components/ProductList";
import styles from "../styles/menu.module.css"; // CSS modülünü import ettik

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

const Menu = () => {
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
      .then((data) => {
        setPosts(data);
        if (data.length > 0) {
          setSelectedMain(data[0].main);
          const firstMainCategories = getCategories(
            data[0].main
          );
          if (firstMainCategories.length > 0) {
            setSelectedCategory(firstMainCategories[0]);
          }
        }
      });
  }, []);

  const handleMainClick = (main: string) => {
    setSelectedMain(main);
    const mainCategories = getCategories(main);
    if (mainCategories.length > 0) {
      setSelectedCategory(mainCategories[0]);
    } else {
      setSelectedCategory(null);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategories = (main: string) => {
    const categories = posts
      .filter((post) => post.main === main && post.category)
      .map((post) => post.category);
    return [...new Set(categories)];
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
    <div className={styles.container}>
      {!selectedMain ? (
        <MainArea
          mainItems={posts}
          onMainClick={handleMainClick}
          selectedMain={selectedMain}
        />
      ) : (
        <div>
          <MainArea
            mainItems={posts}
            onMainClick={handleMainClick}
            selectedMain={selectedMain}
          />
          {getCategories(selectedMain).length > 0 ? (
            <div>
              <CategoryArea
                categories={getCategories(selectedMain)}
                onCategoryClick={handleCategoryClick}
                selectedCategory={
                  selectedCategory ??
                  getCategories(selectedMain)[0]
                }
              />
              <ProductList
                products={getPostsByMainAndCategory(
                  selectedMain,
                  selectedCategory ??
                    getCategories(selectedMain)[0]
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
  );
};

export default Menu;

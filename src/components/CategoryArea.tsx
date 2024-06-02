import React from "react";
import styles from "../styles/categoryarea.module.css"; // CSS modülünü import ettik

interface CategoryAreaProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryArea: React.FC<CategoryAreaProps> = ({
  categories,
  onCategoryClick,
  selectedCategory,
}) => {
  return (
    <div className={styles.categoryArea}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryButton} ${
            category === selectedCategory
              ? styles.selected
              : ""
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryArea;

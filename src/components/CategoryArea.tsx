import React from "react";

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
    <div className="category-area">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${
            category === selectedCategory ? "selected" : ""
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

import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories">
      <h4>Filter by category</h4>
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
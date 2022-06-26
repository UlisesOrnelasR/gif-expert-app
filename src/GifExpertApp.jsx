import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index.js";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dogs"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => {
          onAddCategory(event);
        }}
      />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

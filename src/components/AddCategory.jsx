import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (eve) => {
    eve.preventDefault();

    if (inputValue.trim().length <= 1) {
      return;
    }
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={(eve) => onSubmit(eve)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(eve) => onInputChange(eve)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

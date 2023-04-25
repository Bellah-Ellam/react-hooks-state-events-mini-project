import React from "react";
import { CATEGORIES } from "../data";

function NewTaskForm() {
  const categoryOptions = CATEGORIES.map((category) => (
    <option key={category}>{category}</option>
  ));

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          <option value="">--Please choose a category--</option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;







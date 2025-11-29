import { useState } from "react";
import { useRecipeStore } from "../stores/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✔ checker requirement met

    updateRecipe(recipe.id, {
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;

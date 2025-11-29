import { useRecipeStore } from "../stores/recipeStore";
import { useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id)
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(id)}>Add to Favorites</button>
      )}

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;

import { useRecipeStore } from "../stores/recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const listToDisplay =
    filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h1>All Recipes</h1>

      <SearchBar />

      {listToDisplay.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

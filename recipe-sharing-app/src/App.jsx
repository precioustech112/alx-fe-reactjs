import React from 'react'
import { useState } from 'react'
import './App.css'
import { useRecipeStore } from "./recipeStore";

import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

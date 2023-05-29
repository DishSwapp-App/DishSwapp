import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import faunadb, { query as q } from 'faunadb';
import "./recipe.css"

const client = new faunadb.Client({ secret: 'fnAFFFdVycAAUQIYdaKZBTm_cMJQeKQoOKMcfDXM' });

function Recipe(){
  const params = useRoute("/recipes/:id");
  const recipeId = params[1].id
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  console.log(params[1].id)

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await client.query(
          q.Let(
            {
              recipe: q.Get(q.Ref(q.Collection("recipes"), recipeId))
            },
            q.Select(["data"], q.Var("recipe"))
          
          )
        );
        setRecipe(response);
  console.log(response);

      } catch (error) {
        setError(error.message);
      }
    }
    if (recipeId) {
      getRecipe();
    }
  }, [recipeId]);

  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe_container">
      <h1>{recipe.recipeTitle}</h1>
      <img src={recipe.imageUrl} alt={recipe.recipeTitle} width="500"/>

      <div className="ingredients">
      <h4>ingredients:</h4> 
      <p>{recipe.recipeIngredients}</p>


      </div>

      <div> 
      <h4>Instructions:</h4> 
      <p>{recipe.recipeInstructions}</p>
          
      </div>

    </div>
  );
}

export default Recipe;

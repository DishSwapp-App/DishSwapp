import React, { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import "./recipe.css";
import Lottie from "lottie-react";
import animation from "./loader.json";
import SharePage from "../Share/share";
import CommentForm from "../Comments/commentForm";
import Comments from "../Comments/showComments";
import SanityComments from "../Comments/sanityComments";

function TestRecipe() {
  const [location] = useLocation();
  const pageLink = window.location.origin + location;
  const params = useRoute("/recipes/:id");
  const recipeId = params[1].id;
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://sbwpz8d0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22recipe%22%20%26%26%20_id%20%3D%3D%20%22${recipeId}%22%5D`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipe(jsonData.result[0]);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data: ", error);
      });
  }, [recipeId]);

  if (error) return <div>Error: {error}</div>;
  if (!recipe)
    return (
      <div>
        <Lottie animationData={animation} />
      </div>
    );

  console.log("Here:", recipe);

  return (
    <div className="recipe_container">
      <h1>{recipe.recipeTitle}</h1>
      <img
        src={recipe.recipeURL}
        alt={recipe.recipeTitle}
        className="recipeImg"
        width="auto"
      />

      <div className="ingredients">
        <h4>Ingredients:</h4>
        <p>{recipe.recipeIngredients}</p>
      </div>

      <div className="instructions">
        <h4>Instructions:</h4>
        <p>{recipe.recipeInstructions}</p>
      </div>

      <SharePage pageLink={pageLink} />

      <div className="comments">
        <CommentForm recipe_id={recipeId} />

        <br></br>

        <h3>Comments</h3>
        <hr></hr>

        <SanityComments recipe_id={recipeId} />
      </div>
    </div>
  );
}

export default TestRecipe;

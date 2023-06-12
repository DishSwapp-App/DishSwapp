import React, { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import faunadb, { query as q } from "faunadb";
import "./recipe.css";
import Lottie from "lottie-react";
import animation from "./loader.json";
import SharePage from "../Share/share";
import CommentForm from "../Comments/commentForm";
import Comments from "../Comments/showComments";
import SanityCommentForm from "../Comments/sanityCommentForm";

const fauna_key = process.env.REACT_APP_FAUNA_KEY;
const client = new faunadb.Client({ secret: fauna_key });
function Recipe() {
  const [location] = useLocation();
  const pageLink = window.location.origin + location;
  const params = useRoute("/recipes/:id");
  const recipeId = params[1].id;
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await client.query(
          q.Let(
            {
              recipe: q.Get(q.Ref(q.Collection("recipes"), recipeId)),
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
  if (!recipe)
    return (
      <div>
        <Lottie animationData={animation} />
      </div>
    );

  return (
    <div className="recipe_container">
      <h1>{recipe.recipeTitle}</h1>
      <img
        src={recipe.imageUrl}
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
        <SanityCommentForm recipe_id={recipeId} />

        <br></br>

        <h3>Comments</h3>
        <hr></hr>

        <Comments recipe_id={recipeId} />
      </div>
    </div>
  );
}

export default Recipe;

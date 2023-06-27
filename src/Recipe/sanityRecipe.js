import React, { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import "./recipe.css";
import Lottie from "lottie-react";
import animation from "./loader.json";
import SharePage from "../Share/share";
import SanityComments from "../Comments/sanityComments";
import SanityCommentForm from "../Comments/sanityCommentForm";
import { Helmet } from "react-helmet";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function SanityRecipe() {
  const [refresh, setRefresh] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [location] = useLocation();
  const pageLink = window.location.origin + location;
  const params = useRoute("/recipes/:id");
  const recipeId = params[1].id;
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  console.log(pageLink);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleCommentSubmit = () => {
    setCommentSubmitted(!commentSubmitted);
  };

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

  return (
    <div className="recipe_container">
      <SignedIn>
        <Helmet>
          <title>{recipe.recipeTitle}</title>
          <meta name="description" content={recipe.recipeTitle} />
          <link
            rel="icon"
            type="image/jpg"
            sizes="350x350"
            href="https://i.ibb.co/DRwMwFM/ce5330bf57f2.jpg"
          ></link>
        </Helmet>
        <h1>{recipe.recipeTitle}</h1>
        <p className="author">{recipe.authorName}</p>
        <img
          src={recipe.recipeURL}
          alt={recipe.recipeTitle}
          className="recipeImg"
          width="auto"
        />

        <div className="ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.recipeIngredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h4>Instructions:</h4>
          <p>{recipe.recipeInstructions}</p>
        </div>

        <div className="comments">
          <SanityCommentForm
            recipe_id={recipeId}
            onRefresh={handleRefresh}
            onCommentSubmit={handleCommentSubmit}
          />

          <br></br>
          <h3>Comments</h3>
          <hr></hr>

          <SanityComments recipe_id={recipeId} key={commentSubmitted} />
        </div>

        <SharePage pageLink={pageLink} />
      </SignedIn>

      <SignedOut>
        <div className="sign-in">
          <RedirectToSignIn afterSignInUrl={pageLink}></RedirectToSignIn>
        </div>
      </SignedOut>
    </div>
  );
}

export default SanityRecipe;

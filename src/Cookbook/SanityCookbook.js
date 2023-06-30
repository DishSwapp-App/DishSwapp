import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useUser } from "@clerk/clerk-react";
import styles from "./cookbook.module.css";
import { Helmet } from "react-helmet";

import DeleteDocumentButton from "./Delete";
import getRecipesByAuthor from "./getSanityRecipes";
import { SignedIn, RedirectToSignIn, SignedOut } from "@clerk/clerk-react";

function SanityCookbook() {
  const [recipes, setRecipes] = useState([]);

  const user = useUser();
  const authorName = user.user.username;

  useEffect(() => {
    async function fetchData() {
      const result = await getRecipesByAuthor(authorName);
      setRecipes(result);
    }
    fetchData();
  }, [authorName]);

  // Check if recipes exist
  const hasRecipes = recipes.length > 0;

  return (
    <div>
      <Helmet>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
      </Helmet>
      <SignedIn>
        <LazyLoadComponent>
          <div className={styles.container}>
            <h1>{authorName}'s Cookbook</h1>

            {hasRecipes ? (
              <>
                <hr />

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {recipes.map((recipe) => (
                    <div key={recipe._id} className="col">
                      <div className="card shadow-sm">
                        <img src={recipe.recipeURL} alt={recipe.recipeTitle} />
                        <div className="card-body">
                          <h5 className="card-title">{recipe.recipeTitle}</h5>
                          <p className="card-text">{recipe.authorName}</p>
                          <Link
                            to={`/recipes/${recipe._id}`}
                            className="btn btn-primary"
                          >
                            View Recipe
                          </Link>
                          <br></br>
                          <br></br>
                          <DeleteDocumentButton ref_Id={recipe._id} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No recipes found.</p>
            )}
          </div>
        </LazyLoadComponent>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
      </SignedOut>
    </div>
  );
}

export default SanityCookbook;

import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "./feed.css";
import { Helmet } from "react-helmet";

function RecipeFeed() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://sbwpz8d0.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22recipe%22%5D"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setRecipes(jsonData.result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipeTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="feed">
      <Helmet>
        <title>Feed</title>
      </Helmet>
      <LazyLoadComponent>
        <div className="container">
          <h1>Recipes</h1>
          <hr />
          <div className="search">
            <input
              type="text"
              placeholder="Search recipes"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredRecipes.map((recipe) => (
              <div key={recipe._id} className="col recipe_item">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazyLoadComponent>
    </div>
  );
}

export default RecipeFeed;

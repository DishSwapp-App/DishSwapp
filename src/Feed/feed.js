import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import getAllRecipes from './getAllRecipes';

const Feed = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllRecipes(); 
      setRecipes(result);
    }
    fetchData();
  }, []);

  console.log(recipes)

  return (
    <div className="container">
      <h1>Recipes</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map(recipe => (
          <div key={recipe.ref.id} className="col">
            <div className="card shadow-sm">
              <img src={recipe.data.imageUrl} alt={recipe.data.recipeTitle} />
              <div className="card-body">
                <h5 className="card-title">{recipe.data.recipeTitle}</h5>
                <p className="card-text">{recipe.data.authorName}</p>
                <Link to={`/recipes/${recipe.ref.id}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

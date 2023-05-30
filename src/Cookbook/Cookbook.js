import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import getUserRecipes from './getUserRecipes';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useUser } from "@clerk/clerk-react";
import styles from "./cookbook.module.css"



const Cookbook = () => {
  const [recipes, setRecipes] = useState([]);

  const user = useUser();
  const authorName = user.user.username;

  useEffect(() => {
    async function fetchData() {
      const result = await getUserRecipes(authorName);
      setRecipes(result);
    }
    fetchData();
  }, [authorName]);

  console.log(recipes)

  return (
    <LazyLoadComponent>
    <div className={styles.container}>
    <h1>{authorName}'s Cookbook</h1>
      
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
    </LazyLoadComponent>
  );
};

export default Cookbook;
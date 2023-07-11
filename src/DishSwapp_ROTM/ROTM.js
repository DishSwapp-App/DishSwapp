import React, { useState, useEffect } from "react";
import { getRecipe } from "./getrotm";
import { Card } from "@mantine/core";
import { CardContent } from "semantic-ui-react";
import { Image } from "@mantine/core";
import { Button } from "@mantine/core";
import { CardHeader } from "semantic-ui-react";
import { Link } from "wouter";
import "./rotm.css";

function ROTM() {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const result = await getRecipe();
      setRecipe(result);
    }
    fetchRecipe();
  }, []);

  console.table(recipe);

  return (
    <div className="rotm">
      <div className="justify-content-center">
        <div md={10} className="center">
          <h3>DishSwapp Recipe Of The Month</h3>
          <br></br>
          <h4>{currentMonth}</h4>
          <br></br>

          <Card sx={{ maxWidth: 400 }} className="center">
            <Image src={recipe?.recipeURL} alt={recipe?.recipeTitle} />
            <CardContent>
              <CardHeader>{recipe?.recipeTitle}</CardHeader>
              <br></br>
              Looking for a healthy and tasty smoothie recipe? We have the
              perfect one! Try it now.
            </CardContent>

            <Link to={`/recipes/${recipe?._id}`}>
              <Button size="md">See Recipe</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ROTM;

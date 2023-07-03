import React, { useState, useEffect } from "react";
import { getRecipe } from "./getrotm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
            <CardMedia
              sx={{ height: 300 }}
              image={recipe?.recipeURL}
              title={recipe?.recipeTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe?.recipeTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Looking for a healthy and tasty smoothie recipe? We have the
                perfect one! Try it now.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/recipes/${recipe?._id}`}>
                <Button size="small">See Recipe</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ROTM;

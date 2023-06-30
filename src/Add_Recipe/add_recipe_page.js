import Login from "../Login/LoginPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AddRecipe from "./addRecipe";
import { Helmet } from "react-helmet";
function AddRecipePage() {
  return (
    <div>
      <Helmet>
        <title>Add Recipe</title>
      </Helmet>

      <SignedIn>
        <br></br>
        <AddRecipe />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </div>
  );
}

export default AddRecipePage;

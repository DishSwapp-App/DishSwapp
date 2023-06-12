import Login from "../Login/LoginPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AddRecipe from "./addRecipe";
function AddRecipePage() {
  return (
    <div>
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

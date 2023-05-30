import AddRecipe from "./addRecipe";
import Login from "../Login/LoginPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";



function AddRecipePage() {
   
  return (
    
    <div>
      <SignedIn>
        <AddRecipe />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </div>
  );
}

export default AddRecipePage;

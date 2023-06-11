import Login from "../Login/LoginPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SanityForm from "./sanity_form";
import Test from "../Test/test";
function AddRecipePage() {
  return (
    <div>
      <SignedIn>
        <br></br>
        <SanityForm />

        <Test />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </div>
  );
}

export default AddRecipePage;

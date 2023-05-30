import Dashboard from "./dashboard"
import Login from "../Login/LoginPage";
import {

      
    SignedIn, 
    SignedOut,

    
  } from "@clerk/clerk-react";

function DashboardPage(){

    return (


        <div>

        <SignedIn>

        <Dashboard />

        </SignedIn>

        <SignedOut>
        <Login />

        </SignedOut>




        </div>
    )
}

export default DashboardPage
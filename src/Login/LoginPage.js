import React from 'react';
import {SignIn,

    SignedIn,
    SignedOut
  } from "@clerk/clerk-react";
  import Dashboard from '../Dashboard/dashboard';


function Login() {

    return(

        <div className='Login'>

        <div className='login'>
        

        <SignedOut>
        <SignIn/>
        </SignedOut>

        </div>

        

        <SignedIn>
        <Dashboard />
        </SignedIn>



        </div>
    )
}


export default Login
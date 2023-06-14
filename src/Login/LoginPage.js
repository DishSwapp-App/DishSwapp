import React from "react";
import "./loginPage.css";

import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="Login">
      <div className="login">
        <SignIn />
      </div>
    </div>
  );
}

export default Login;

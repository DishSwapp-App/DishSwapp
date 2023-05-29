import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "wouter";
import "./nav.css";

function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleButtonClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <img
        alt="Logo"
        src="https://i.ibb.co/9vKRQJG/Dish-Swapp.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{" "}
      <Link href="/" className="link app_name"> <b> DishSwapp</b> </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleButtonClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`}
        id="navbarContent"
      >
        <ul className="navbar-nav mr-auto w-100">
          <li className="nav-item active">
            <Link href="/dashboard" className="link"> Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="link">About</Link>
          </li>
        </ul>

        <div className="sign_in">
          <SignedOut>
            <Link href="/dashboard" className="link">Login</Link>
          </SignedOut>
        </div>

        <div className="sign_in">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
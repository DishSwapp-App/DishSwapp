import React from "react";
import { Link } from "wouter";
import "./home.css";
import Anim from "./anim";
import Footer from "../Footer/footer";
import ROTM from "../DishSwapp_ROTM/ROTM";
import { SignedOut } from "@clerk/clerk-react";
import { Helmet } from "react-helmet";
import Cuisine from "./cuisine";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home">
        <section className="jumbotron text-center">
          <div className="container">
            <div className="text">
              <h1 className="jumbotron-heading text-white mb-4">
                Welcome to DishSwapp
              </h1>
              <p className="lead text-white">Collect, Collaborate, Cook.</p>
            </div>
            <br />
            <SignedOut>
              <Link href="/dashboard" className="btn btn-lg btn-login mb-2">
                Login/Signup
              </Link>
            </SignedOut>
          </div>
        </section>
      </div>

      <Cuisine />

      <br></br>
      <br></br>
      <br></br>

      <section id="info">
        <Anim />
        <hr class="border border-danger border-2 opacity-50 divider"></hr>
        <ROTM />
      </section>
      <br></br>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

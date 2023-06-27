import React from "react";
import { Link } from "wouter";
import "./home.css";
import Anim from "./anim";
import Footer from "../Footer/footer";
import ROTM from "../DishSwapp_ROTM/ROTM";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <section className="jumbotron text-center">
          <div className="container">
            <div className="text">
              <h1 className="jumbotron-heading text-white mb-4">
                Welcome to DishSwapp
              </h1>
              <p className="lead text-white">Collect, Collaborate, Cook.</p>
            </div>
            <br />
            <Link href="/dashboard" className="btn btn-lg btn-login mb-2">
              Login/Signup
            </Link>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://i.ibb.co/59NBt0q/Italian-Cuisine.jpg"
                  className="card-img-top"
                  alt="Italian-Cuisine"
                  border="0"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Italian Cuisine</h5>
                  <p className="card-text">
                    Discover authentic Italian recipes that will transport you
                    to the Mediterranean coast.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://i.ibb.co/DkcfWJW/pexels-chitokan-c-2087748.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mexican Cuisine</h5>
                  <p className="card-text">
                    Spice up your life with some of the best Mexican recipes out
                    there.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://i.ibb.co/P6KwcmG/Asian-Cuisine.jpg"
                  className="card-img-top"
                  alt="Asian-Cuisine"
                  border="0"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Asian Cuisine</h5>
                  <p className="card-text">
                    Explore the exotic flavors of Asia with our collection of
                    delicious recipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <section id="info">
        <Anim />
        <ROTM />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;

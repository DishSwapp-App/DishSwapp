import React from "react";
import "./home.css";

const Cuisine = () => {
  return (
    <div>
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
                  Discover authentic Italian recipes that will transport you to
                  the Mediterranean coast.
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
  );
};

export default Cuisine;

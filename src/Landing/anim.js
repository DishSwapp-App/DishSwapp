import React from "react";
import animation from "./food.json";
import Lottie from "lottie-react";
import "./home.css";

const Anim = () => {
  return (
    <div className="anim">
      <section>
        <h3>Start Exploring Recipes</h3>

        <div className="animation">
          <Lottie animationData={animation}></Lottie>
        </div>
      </section>
    </div>
  );
};

export default Anim;

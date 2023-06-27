import React from "react";
import animation from "./food.json";
import Lottie from "lottie-react";

const Anim = () => {
  return (
    <div>
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

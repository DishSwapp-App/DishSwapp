import React from "react";
import "./donate.css";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div className="donate">
      <Helmet>
        <title>Donate</title>
      </Helmet>
      <h2 class="text-center mt-5">Help us do more awesome things!</h2>{" "}
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <p class="text-center">
              {" "}
              Here at DishSwapp we are always looking to give you more for less.
              We are independent and would appreciate any donations. These
              donations go directly into developing DishSwapp with more awesome
              features. If you think that's great go ahead and donate below!
              Thanks in advance!{" "}
            </p>
            <p class="text-center">
              PS: Even if you don't donate we still appreciate you using
              DishSwapp, so thank you!
            </p>
            <h3 class="text-center mt-5">Remember..</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">DishSwapp is completely free!</li>
              <li class="list-group-item">DishSwapp is completely free!!</li>
              <li class="list-group-item">DishSwapp is completely free!!!</li>
              <li class="list-group-item">
                We want to continue giving you more amazing things for free.
              </li>
              <li class="list-group-item">
                We would appreciate it if you could donate as low as $5, whether
                one-time or monthly.
              </li>
              <li class="list-group-item">
                Your donation will help us add more awesome features that will
                benefit YOU, the user.
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <section>
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/dishswapp/?hidefeed=true&widget=true&embed=true&preview=true"
          style={{
            border: "none",
            width: "100%",
            padding: "4px",
            background: "#f9f9f9",
          }}
          height="712"
          title="dishswapp"
        ></iframe>
      </section>
    </div>
  );
};

export default Donate;

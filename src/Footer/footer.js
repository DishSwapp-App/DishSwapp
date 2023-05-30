import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-left">
          
            <img src="https://i.ibb.co/9vKRQJG/Dish-Swapp.jpg"  className="img-fluid" alt="Dish-Swapp" border="0"></img>
          </div>
          <div className="col-12 col-md-6 text-center text-md-right">
            <a
              href="https://twitter.com/DishSwapp"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-icon"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              &copy; 2023 DishSwapp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
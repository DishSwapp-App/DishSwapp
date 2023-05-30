import React from 'react';
import style from "./footer.module.css"
import {TwitterIcon} from "react-share"

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">About Us</h3>
            <p>
              We are currently in testing
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="list-unstyled">
              <li>
                <p href="#">Email: dishwapp@gmail.com</p>
              </li>
              
              
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="list-inline social-links">
              <li className="list-inline-item">
                <a href="twitter.com/dishSwapp">

                <TwitterIcon />
                
                  
                </a>
              </li>
          
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p>&copy; 2023 DishSwapp</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
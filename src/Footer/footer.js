import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt commodo eros, sit amet porta lectus. Nulla facilisi.
              Sed lobortis lorem ac lorem luctus, quis consequat massa bibendum.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
              <li>
                <a href="#">Address</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="list-inline social-links">
              <li className="list-inline-item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://source.unsplash.com/featured/?instagram"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://source.unsplash.com/featured/?facebook"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://source.unsplash.com/featured/?twitter"
                    alt="Twitter"
                  />
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
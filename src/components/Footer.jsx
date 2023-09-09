import React from "react";
import "../styles/footer.css"; // Import the CSS file with the styles

const Footer = () => {
  return (
    <footer className="mb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5 fade-in">
            <h4 className="mb-4">Contact Us</h4>
            <p className="mb-3 text-white">
              Have questions or need assistance? Feel free to reach out to us.
            </p>
            <p>
              <a 
                href="mailto:contact@example.com"
                className="text-decoration-none  text-white fs-5"
              >
                contact@example.com
              </a>
            </p>
          </div>
          <div className="col-md-4 mt-5 slide-in">
            <h4 className="mb-4">Follow Us</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a
                  className="fs-3"
                  href="https://www.facebook.com/your-facebook-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="fs-3"
                  href="https://twitter.com/your-twitter-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="fs-3"
                  href="https://www.instagram.com/your-instagram-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-5 text-white slide-in">
            <div className="email-section">
              <h4 className="mb-4">Subscribe to Our Newsletter</h4>
              <p className="mb-3">
                Stay updated with the latest offers and updates by subscribing
                to our newsletter.
              </p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control fs-5"
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary fs-5"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <p className="mt-3">
                Join our community and be the first to know!
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4 text-white fw-bold" />
        <div className="text-center py-3">
          <p className="mb-0 fs-5 text-white">&copy; {new Date().getFullYear()} Ecommerce Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

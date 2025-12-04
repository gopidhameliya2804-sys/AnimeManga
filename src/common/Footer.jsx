import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* Footer Area Start  */}
      <footer>
        <div className="container-fluid">
          <div className="footer-main">
            <div className="footer-info">
              <div className="footer-about">
                <div className="logo mb-40">
                  <Link to=" / ">
                    <img src="assets/media/logo.png" alt />
                  </Link>
                </div>
                <p className="light-gray h-20 light mb-32">
                  Stay connected with us and lets know <br /> more stories about
                  new movies and <br /> More Explorer Us for get it
                </p>
                <ul className="unstyled social-icons">
                  <li>
                    <Link to=" / ">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to=" / ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.624 5.625C18.0121 5.625 18.3271 5.31 18.3271 4.92188V0.703125C18.3271 0.315 18.0121 0 17.624 0H13.4053C10.6912 0 8.4834 2.20781 8.4834 4.92188V8.4375H6.37402C5.9859 8.4375 5.6709 8.7525 5.6709 9.14062V13.3594C5.6709 13.7475 5.9859 14.0625 6.37402 14.0625H8.4834V23.2969C8.4834 23.685 8.7984 24 9.18652 24H13.4053C13.7934 24 14.1084 23.685 14.1084 23.2969V14.0625H16.9209C17.2645 14.0625 17.5579 13.8141 17.6146 13.4752L18.3178 9.25641C18.3515 9.0525 18.2943 8.84391 18.1607 8.68594C18.0271 8.52844 17.8307 8.4375 17.624 8.4375H14.1084V5.625H17.624ZM13.4053 9.84375H16.7939L16.3251 12.6562H13.4053C13.0171 12.6562 12.7021 12.9713 12.7021 13.3594V22.5938H9.88965V13.3594C9.88965 12.9713 9.57465 12.6562 9.18652 12.6562H7.07715V9.84375H9.18652C9.57465 9.84375 9.88965 9.52875 9.88965 9.14062V4.92188C9.88965 2.98359 11.467 1.40625 13.4053 1.40625H16.9209V4.21875H13.4053C13.0171 4.21875 12.7021 4.53375 12.7021 4.92188V9.14062C12.7021 9.52875 13.0171 9.84375 13.4053 9.84375Z"
                          fill="#7A7F85"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to=" / ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.866 10.3108L22.6084 0.148438H20.5368L12.9457 8.97227L6.88278 0.148438H-0.110107L9.05826 13.4916L-0.110107 24.1484H1.96169L9.97803 14.8302L16.3809 24.1484H23.3738L13.8655 10.3108H13.866ZM11.0284 13.6092L10.0995 12.2805L2.70818 1.70805H5.89033L11.8552 10.2404L12.7841 11.569L20.5378 22.6598H17.3556L11.0284 13.6097V13.6092Z"
                          fill="#7A7F85"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h5 className="h-24 bold color-white mb-24">Top Links</h5>
                <ul className="link unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="listing">Animes</Link>
                  </li>
                  <li>
                    <Link to="mangalisting">Mangas</Link>
                  </li>
                </ul>
              </div>
              <div className="list">
                <h5 className="h-24 bold color-white mb-24">Information</h5>
                <ul className="link unstyled">
                  {/*<li>
                    <Link to="signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>*/}
                  <li>About Us</li>
                </ul>
              </div>
              <div className="list">
                <h5 className="h-24 bold color-white mb-24">Services</h5>
                <ul className="link unstyled">
                  <li>
                    <Link to="movie-detail.html">Mangas</Link>
                  </li>
                  <li>
                    <Link to="category">Category</Link>
                  </li>
                  
                </ul>
              </div>
              <div className="list">
                <h5 className="h-24 bold color-white mb-24">Security</h5>
                <ul className="link unstyled">
                  <li>
                    <a href="#">Terms and Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  {/*<li>
                    <a href="#">Contact us</a>
                  </li>*/}
                </ul>
              </div>
            </div>
          </div>
          <p className="color-white text-center copyright">
            All rights reserved by Vivid ©2024.
          </p>
        </div>
      </footer>
      {/* Footer Area End  */}
    </div>
  );
}

export default Footer;

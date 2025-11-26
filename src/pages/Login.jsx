import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="page-content">
        {/* 404 Area Start */}
        <section className="login text-center">
          <div className="content">
            <div className="login-block">
              <div className="login-content">
                <h1 className="color-white mb-32">Login</h1>
                <Link to="#" className="google hide-link mb-24">
                  <img src="assets/media/icons/google.html" alt /> Continue with
                  Google
                </Link>
                <Link to="#" className="facebook hide-link mb-24">
                  <img src="assets/media/icons/facebook-2.html" alt /> Continue
                  with Facebook
                </Link>
                <button id="continue-email" className="mail hide-link mb-32">
                  <img src="assets/media/icons/mail.html" alt /> Continue with
                  email
                </button>
                <div
                  className="login-sec hide-form"
                  style={{ display: "none" }}
                >
                  <form action="https://uiparadox.co.uk/templates/vivid/v3/login.html">
                    <div className="mb-32">
                      <input
                        type="email"
                        name="email"
                        className="form-control mb-32"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="mb-32">
                      <input
                        type="password"
                        name="password"
                        className="form-control mb-32"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="text-center mb-32">
                      <button className="cus-btn primary mb-32 ">Login</button>
                    </div>
                  </form>
                  <h6 id="backtologin" className="color-primary mb-16">
                    Go back
                  </h6>
                </div>
                <div className="text-center">
                  <h6>
                    Create an account?{" "}
                    <Link to="signup" className="color-primary">
                      Sign up
                    </Link>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 404 Area end */}
      </div>
      {/* Main Content End */}
    </div>
  );
}

export default Login;

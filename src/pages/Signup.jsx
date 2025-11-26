import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="page-content">
        {/* 404 Area Start */}
        <section className="signup text-center">
          <div className="container-fluid">
            <div className="signup-block">
              <h1 className="color-white mb-32">Sign Up</h1>
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
                <div className="mb-32">
                  <input
                    type="password"
                    name="c_password"
                    className="form-control mb-32"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="text-center">
                  <button className="cus-btn primary mb-32">Sign up</button>
                </div>
              </form>
              <div className="text-center">
                <p className="sec color-gray mb-32">
                  By continuing, you agree to VIVID Terms of Use and Privacy
                  Policy.
                </p>
                <h6>
                  Already have an account?{" "}
                  <Link to="login" className="color-primary">
                    Log in
                  </Link>
                </h6>
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

export default Signup;

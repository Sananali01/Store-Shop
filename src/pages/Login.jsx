import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import '../styles/login.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-danger text-light">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline">Register</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-primary text-light" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

import React, { Fragment /*, useState, useEffect }  */ } from "react";
import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getUser, logout } from '../../Utilitys/helpers';
// import axios from 'axios';

const Header = () => {
  return (
    <Fragment>
      <div className="navbar bg-100">
        <div className="flex-1">
          <Link to="/" className="inline-block text-teal-600">
            <div className="flex items-center">
              <img
                src="./images/citrus.png"
                className="h-10 w-10"
                alt="Kaalamansi Logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#58B741" }}
                className="flex items-center"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/plant"
                style={{ textDecoration: "none", color: "#58B741" }}
                className="flex items-center"
              >
                Plant
              </Link>
            </li>
            <li>
              <Link
                to="/predict"
                style={{ textDecoration: "none", color: "#58B741" }}
                className="flex items-center"
              >
                Predict
              </Link>
            </li>
            <li>
              <Link
                to="/guide"
                style={{ textDecoration: "none", color: "#58B741" }}
                className="flex items-center"
              >
                Guide
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#58B741" }}
                className="flex items-center"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#58B741"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#58B741" }}
                  className="flex items-center"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#58B741" }}
                  className="flex items-center"
                  //   onClick={logoutHandler}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

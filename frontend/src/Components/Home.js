import React, { Fragment, useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="hero flex justify-between items-center w-screen p-3">
            <div className="column">
              <img
                src="./images/kalamansi fruits.png"
                className="max-w-sm rounded-lg"
              />
            </div>
            <div className="column" style={{ paddingLeft: "1cm" }}>
              <h1
                className="text-8xl font-bold"
                style={{
                  paddingRight: "1em",
                  color: "#58B741",
                  textAlign: "right",
                  fontFamily: "League Spartan",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Kaalaman
                <br /> si.
              </h1>
              <p
                className="text-left"
                style={{ color: "#58B741", paddingRight: "3em" }}
              >
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi. Provident
                cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary btn-green">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

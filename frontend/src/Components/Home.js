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
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                Kaalaman.si
              </h1>
              <p
                className="text-left"
                style={{ color: "#58B741", paddingRight: "5em" }}
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
          <div className="hero w-screen px-20 pb-6">
            <div className="hero-content flex-col lg:flex-row-reverse items-left">
              <img src="./images/predict.png" className="max-w-xs rounded-lg" />
              <div className="text-left pt-6">
                <h1
                  className="text-5xl font-bold pr-12"
                  style={{
                    color: "#58B741",
                    fontFamily: "League Spartan",
                    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Predict its quality and diseases
                </h1>
                <p
                  className="pt-6 pr-20 "
                  style={{
                    color: "#58B741",
                  }}
                >
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Provident cupiditate voluptatem
                  et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary btn-green">Try Now</button>
              </div>
            </div>
          </div>
          <h1
            className="text-3xl font-bold text-center mt-5 mb-5 w-screen p-3"
            style={{
              color: "#58B741",
              fontFamily: "League Spartan",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Kalamansi Gallery
          </h1>
          <div className="hero flex justify-between items-center w-screen pb-20">
            <div class="container mx-auto px-5 lg:px-32">
              <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 1.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 2.jpg"
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 3.jpg"
                    />
                  </div>
                </div>
                <div class="flex w-1/2 flex-wrap">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 4.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 5.jpg"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="./images/plant 6.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

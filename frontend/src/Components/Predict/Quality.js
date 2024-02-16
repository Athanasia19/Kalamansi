import React, { Fragment } from "react";

const predict = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="text-3xl font-bold text-center mt-5 mb-5 w-screen p-3"
              style={{
                color: "#58B741",
                fontFamily: "League Spartan",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
              }}
            >
              Predict Quality
            </h1>
            <div className="pl-56 pb-10">
              <form class="px-7 grid justify-center items-center">
                <div class="grid gap-6" id="form">
                  <div class="w-full flex gap-3">
                    <input
                      class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Size"
                      id="size"
                      name="Size"
                      required=""
                    />
                    <input
                      class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Shape"
                      id="shape"
                      name="Shape"
                    />

                    <input
                      class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Soil"
                      id="soil"
                      name="soil"
                    />
                    <input
                      class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Pruning"
                      id="pruning"
                      name="pruning"
                      required=""
                    />
                  </div>
                  <div class="flex gap-3">
                    <input
                      class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Sun exposure"
                      id="sunlight"
                      name="sunlight"
                      required=""
                    />
                    <input
                      class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                      type="text"
                      placeholder="Firmness"
                      required=""
                    />
                  </div>
                  <button
                    class="outline-none glass shadow-xl w-20 items-center p-3 mx-auto bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default predict;

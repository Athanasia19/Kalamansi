import React, { useState, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Layout/Loader";
import { Dialog, Transition } from "@headlessui/react";

const Guide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // const index = [1, 2, 3, 4, 5, 6, 7, 8];
  const cardContent = [
    {
      title: "01. Choose Kalamansi Seeds",
      content:
        "Selecting high-quality kalamansi seeds from a reliable source is a crucial first step for any aspiring or experienced kalamansi grower. The quality of seeds directly influences the success and productivity of your kalamansi plant. A reliable source ensures that you are obtaining seeds from a reputable and trustworthy supplier, reducing the risk of acquiring subpar or potentially compromised genetic material.",
    },
    {
      title: "02. Plant the Seeds",
      content:
        "Once you have carefully selected high-quality kalamansi seeds from a reliable source, the next critical step in cultivating a successful kalamansi plant is to plant the seeds in well-draining soil while ensuring proper spacing. The choice of soil and spacing plays a pivotal role in the initial stages of growth, setting the foundation for healthy root development and robust plant growth.",
    },
    {
      title: "03. Watering",
      content:
        "Watering is a critical aspect of kalamansi plant care, and maintaining consistent moisture in the soil is essential for the health and productivity of the plants. Regular and appropriate watering ensures that the kalamansi plants receive the necessary hydration for growth, fruit development, and overall vitality.",
    },
    {
      title: "04. Fertilize",
      content:
        "Applying a balanced fertilizer is a crucial step in promoting the healthy growth and fruiting of kalamansi plants. Fertilizers provide essential nutrients that may be lacking in the soil, ensuring that the kalamansi trees have the necessary elements for robust development and the production of high-quality fruits.",
    },
    {
      title: "05. Sunlight",
      content:
        "Ensuring ample sunlight is a key factor in the successful cultivation of Kalamansi plants, as they are known to thrive in full sun conditions. Adequate sunlight is essential for various aspects of the plant's growth, including photosynthesis, flower development, and fruiting.",
    },
    {
      title: "06. Temperature",
      content:
        "Maintaining a warm environment is essential for the successful cultivation of Kalamansi plants, as they thrive in temperatures ranging between 70-100°F (21-38°C). Creating and sustaining a favorable temperature range is crucial for various physiological processes, including growth, flowering, and fruit development. ",
    },
    {
      title: "07. Regular Check",
      content:
        "Regular monitoring for pests, diseases, and nutrient deficiencies is a fundamental aspect of successful Kalamansi cultivation. Proactive observation allows growers to identify potential issues early on, enabling timely intervention and preventive measures. ",
    },
    {
      title: "08. Harvesting",
      content:
        "Harvest the ripe Kalamansi fruits when they are green and fully mature.",
    },
  ];

  const openModal = (index) => {
    setSelectedCard(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsOpen(false);
  };

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="text-3xl font-bold text-center mt-5 mb-5 w-screen p-3"
              style={{
                color: "#58B741",
                fontFamily: "League Spartan",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              GUIDE: How to grow Kalamansi
            </h1>
            <div className="flex flex-wrap w-screen gap-size">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="m-10">
                  <button className="card" onClick={() => openModal(index)}>
                    <img
                      src={`/images/${index}.png`}
                      alt={`${index}`}
                      className="w-full h-full object-cover rounded-md image-card"
                    />
                  </button>
                </div>
              ))}

              <Transition show={isOpen} as={React.Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                    </Transition.Child>

                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <div
                        className="inline-block my-8 w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl mt-40 mx-auto"
                        style={{ fontFamily: "League Spartan" }}
                      >
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-medium leading-6 text-gray-900 p-6  bg-gray-50"
                          style={{ color: "#58B741" }}
                        >
                          {selectedCard && (
                            <>
                              <h1>{cardContent[selectedCard - 1].title}</h1>{" "}
                            </>
                          )}
                        </Dialog.Title>
                        <div className="bg-gray-50 p-6">
                          {selectedCard && (
                            <>
                              <p>{cardContent[selectedCard - 1].content}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    //   )}
    // </Fragment>
  );
};

export default Guide;

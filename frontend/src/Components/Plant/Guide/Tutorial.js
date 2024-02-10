import React, { useState, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Layout/Loader";
import { Dialog, Transition } from "@headlessui/react";

const Guide = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardContent = [
    {
      title: "01. Choose Kalamansi Seeds",
      content: "Select high-quality Kalamansi seeds from a reliable source.",
    },
    {
      title: "02. Plant the Seeds",
      content:
        "Plant the seeds in well-draining soil, ensuring proper spacing.",
    },
    {
      title: "03. Watering",
      content:
        "Water the Kalamansi plants regularly, keeping the soil consistently moist.",
    },
    {
      title: "04. Fertilize",
      content:
        "Apply a balanced fertilizer to promote healthy growth and fruiting.",
    },
    {
      title: "05. Sunlight",
      content:
        "Provide ample sunlight, as Kalamansi plants thrive in full sun.",
    },
    {
      title: "06. Temperature",
      content:
        "Maintain a warm environment, as Kalamansi prefers temperatures between 70-100°F.",
    },
    {
      title: "07. Regular Check",
      content:
        "Monitor the plants for pests, diseases, and nutrient deficiencies regularly.",
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
              How to grow Kalamansi
            </h1>
            <div className="flex flex-wrap w-screen gap-size">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="m-10">
                  <button className="card" onClick={() => openModal(index)}>
                    <img
                      src={`images/${index}.png`}
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
                          className="text-2xl font-medium leading-6 text-gray-900 p-6"
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

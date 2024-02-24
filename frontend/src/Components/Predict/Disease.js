import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PredictDisease = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/predict/disease`, jsonData, {
                headers: {
                    'Content-Type': 'application/json'
                }
                
            });
            console.log("Frontend Response Data:", response.data);
            if (response.data && response.data.inserted_data) {
                navigate('/disease/result', { state: { diseaseData: response.data.inserted_data } });
            } else {
                setError('Prediction failed. Please try again.');
            }
        } catch (error) {
            console.error('Prediction request failed:', error);
            console.error("Error Response:", error.response);
            setError('Prediction failed. Please try again.');
        }
    };

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
                            }}>Kalamansi Disease Prediction</h1>
                        <div className="pl-56 pb-10">
                            <form class="px-7 grid justify-center items-center" onSubmit={handleSubmit}>
                                {/* Input fields for features */}
                                <div class="grid gap-6" id="form" >
                                    <div class="w-full flex gap-3">
                                        <label className="form-control w-full max-w-m" for="leaf_spots">
                                            <div className="label">
                                                <span className="label-text">Leaf Spots: </span>
                                            </div>
                                            <select className="select select-bordered" id="leaf_spots" name="leaf_spots">
                                                <option disabled selected>Select size</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-m" for="wilting">
                                            <div className="label">
                                                <span className="label-text">Wilting: </span>
                                            </div>
                                            <select className="select select-bordered" id="wilting" name="wilting">
                                                <option disabled selected>Select size</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-m" for="discoloration">
                                            <div className="label">
                                                <span className="label-text">Discoloration: </span>
                                            </div>
                                            <select className="select select-bordered" id="discoloration" name="discoloration">
                                                <option disabled selected>Select size</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Present">Present</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="grid gap-6" id="form">
                                    <div class="w-full flex gap-3">
                                        <label className="form-control w-full max-w-xs" for="lesions">
                                            <div className="label">
                                                <span className="label-text">Lesions: </span>
                                            </div>
                                            <select className="select select-bordered" id="lesions" name="lesions">
                                                <option disabled selected>Select size</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Present">Present</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs" for="fertilized">
                                            <div className="label">
                                                <span className="label-text">Fertilized: </span>
                                            </div>
                                            <select className="select select-bordered" id="fertilized" name="fertilized">
                                                <option disabled selected>Select soil type</option>
                                                <option value="No">Not Fertilized</option>
                                                <option value="Yes">Fertilized</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs" for="watering_sched">
                                            <div className="label">
                                                <span className="label-text">Watering Schedule: </span>
                                            </div>
                                            <select className="select select-bordered" id="watering_sched" name="watering_sched">
                                                <option disabled selected>Select size</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Irregular">Irregular</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="grid gap-6" id="form">
                                    <div class="w-full flex gap-3">
                                    <label className="form-control w-full max-w-xs" for="pruning">
                                            <div className="label">
                                                <span className="label-text">Pruning: </span>
                                            </div>
                                            <select className="select select-bordered" id="pruning" name="pruning">
                                                <option disabled selected>Select soil type</option>
                                                <option value="Never">Never</option>
                                                <option value="Occasional">Occasional</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Frequent">Frequent</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs" for="pesticide_use">
                                            <div className="label">
                                                <span className="label-text">Pesticide: </span>
                                            </div>
                                            <select className="select select-bordered" id="pesticide_use" name="pesticide_use">
                                                <option disabled selected>Select soil type</option>
                                                <option value="Nothing">None</option>
                                                <option value="Fungicide">Fungicide</option>
                                                <option value="Insecticide">Insecticide</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full max-w-xs" for="pest_presence">
                                            <div className="label">
                                                <span className="label-text">Pet Presence: </span>
                                            </div>
                                            <select className="select select-bordered" id="pest_presence" name="pest_presence">
                                                <option disabled selected>Select soil type</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Present">Present</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <button class="outline-none glass shadow-xl w-20 items-center p-3 mx-auto bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold"
                                    type="submit">Predict</button>
                            </form>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PredictDisease;
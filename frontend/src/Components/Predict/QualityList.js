import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";

const QualityList = () => {
  const [allQualityPredicts, setAllQualityPredicts] = useState([]);

  const qualityList = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_API}/quality/all`,
        config
      );
      setAllQualityPredicts(response.data.quality_data);
    } catch (error) {
      console.error("Error fetching quality data:", error);
    }
  };

  useEffect(() => {
    qualityList();
  }, []);

  const columns = [
    { label: "Size", field: "size", sort: "asc" },
    { label: "Firmness", field: "firmness", sort: "asc" },
    { label: "Shape", field: "shape", sort: "asc" },
    { label: "Skin Color", field: "skin_color", sort: "asc" },
    { label: "Blemishes", field: "blemishes", sort: "asc" },
    { label: "Soil Type", field: "soil_type", sort: "asc" },
    { label: "Sun Exposure", field: "sun_exposure", sort: "asc" },
    { label: "Location", field: "location", sort: "asc" },
    { label: "Fertilizer", field: "fertilized", sort: "asc" },
    { label: "Watering Schedule", field: "watering_sched", sort: "asc" },
    { label: "Pruning", field: "pruning", sort: "asc" },
    { label: "Pest Presence", field: "pest_presence", sort: "asc" },
    { label: "Prediction", field: "predicted_quality", sort: "asc" },
  ];

  const data = {
    columns,
    rows: allQualityPredicts,
  };

  return (
    <div>
      <h1 className="my-5">All Quality Predictions</h1>
      <MDBDataTable
        responsive
        bordered
        hover
        data={data}
        paging={true}
        searching={true}
      />
    </div>
  );
};

export default QualityList;

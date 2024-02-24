import React from 'react';
import { useLocation } from 'react-router-dom';

const DiseaseResult = () => {
    const location = useLocation();
    const diseaseData = location.state && location.state.diseaseData;

    return (
        <div>
            <h1>Disease Result</h1>
            {diseaseData && (
                <div>
                    <p>Quality ID: {diseaseData._id}</p>
                    <p>Predicted Quality: {diseaseData.predicted_disease}</p>
                </div>
            )}
        </div>
    );
}

export default DiseaseResult;
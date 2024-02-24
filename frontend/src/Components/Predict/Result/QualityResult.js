import React from 'react';
import { useLocation } from 'react-router-dom';

const QualityResult = () => {
    const location = useLocation();
    const qualityData = location.state && location.state.qualityData;

    return (
        <div>
            <h1>Quality Result</h1>
            {qualityData && (
                <div>
                    <p>Quality ID: {qualityData._id}</p>
                    <p>Predicted Quality: {qualityData.predicted_quality}</p>
                </div>
            )}
        </div>
    );
}

export default QualityResult;
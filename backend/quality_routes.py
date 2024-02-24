from flask import Blueprint, jsonify, request
from model import load_quality_model
import pandas as pd

quality_routes = Blueprint('quality_routes', __name__)

# QUALITY PREDICTION ROUTES
# Define mapping dictionaries
firm_mapping = {'flabby': 0, 'firm': 1}
shape_mapping = {'oblong': 0, 'spherical': 1}
blemishes_mapping = {'not present': 0, 'present': 1}
fertilized_mapping = {'not fertilized': 0, 'fertilized': 1}
watering_mapping = {'irregular': 0, 'regular': 1}
pruning_mapping = {'not regular': 0, 'regular': 1}
pest_mapping = {'no': 0, 'yes': 1}
quality_mapping = {'low': 0, 'high': 1}
size_mapping = {'small': 0, 'medium': 1, 'big': 2}
color_mapping = {'dull yellow': 0, 'bright green': 1, 'mixed': 2}
soil_mapping = {'loamy': 0, 'clayey': 1, 'sandy': 2}
sun_mapping = {'full shade': 0, 'partial shade': 1, 'full sun': 2}
location_mapping = {'patio': 0, 'balcony': 1, 'rooftop': 2}

@quality_routes.route('/predict/quality', methods=['POST'])
def predict_quality():
    from app import db
    quality_model = load_quality_model()
    try:
        # Get input features from JSON data
        data = request.get_json()
        size = data['size']
        firmness = data['firmness']
        shape = data['shape']
        skin_color = data['skin_color']
        blemishes = data['blemishes']
        soil_type = data['soil_type']
        sun_exposure = data['sun_exposure']
        location = data['location']
        fertilized = data['fertilized']
        watering_sched = data['watering_sched']
        pruning = data['pruning']
        pest_presence = data['pest_presence']
        
        # Map categorical inputs to numerical representations
        size_val = size_mapping[size]
        firmness_val = firm_mapping[firmness]
        shape_val = shape_mapping[shape]
        skin_color_val = color_mapping[skin_color]
        blemishes_val = blemishes_mapping[blemishes]
        soil_type_val = soil_mapping[soil_type]
        sun_exposure_val = sun_mapping[sun_exposure]
        location_val = location_mapping[location]
        fertilized_val = fertilized_mapping[fertilized]
        watering_sched_val = watering_mapping[watering_sched]
        pruning_val = pruning_mapping[pruning]
        pest_presence_val = pest_mapping[pest_presence]
        
        # Create input data for prediction
        input_quality = pd.DataFrame({
            'fruit_firmness': [firmness_val],
            'fruit_shape': [shape_val],
            'fruit_blemishes': [blemishes_val],
            'fertilizer': [fertilized_val],
            'water_sched': [watering_sched_val],
            'fruit_pruning': [pruning_val],
            'pest': [pest_presence_val],
            'fruit_size': [size_val],
            'fruit_color': [skin_color_val],
            'soil': [soil_type_val],
            'sun_expo': [sun_exposure_val],
            'loc': [location_val]
        })
        
        # Make prediction using the loaded model
        quality_prediction = quality_model.predict(input_quality)
        # Map prediction back to categorical representation
        predicted_quality = 'high' if quality_prediction[0] == 1 else 'low'

        # Store input features and prediction in MongoDB (quality collection)
        quality_input = {
            'size': size,
            'firmness': firmness,
            'shape': shape,
            'skin_color': skin_color,
            'blemishes': blemishes,
            'soil_type': soil_type,
            'sun_exposure': sun_exposure,
            'location': location,
            'fertilized': fertilized,
            'watering_sched': watering_sched,
            'pruning': pruning,
            'pest_presence': pest_presence,
            'predicted_quality': predicted_quality
        }
        quality_id = db.quality.insert_one(quality_input).inserted_id

        # return jsonify({'quality_id': str(quality_id), 'predicted_quality': predicted_quality}), 200
        # Retrieve the inserted data from the database
        newQuality = db.quality.find_one({'_id': quality_id}, {'_id': 0})

        return jsonify({'inserted_data': newQuality}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@quality_routes.route('/quality/all', methods=['GET'])
def get_AllQuality():
    from app import db
    try:
        # Retrieve all documents from the quality collection
        quality_data = list(db.quality.find({}, {'_id': 0}))

        # Return the quality data as JSON response
        return jsonify({'quality_data': quality_data}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

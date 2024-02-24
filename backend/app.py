from flask import Flask
from flask_cors import CORS
from database import initialize_database
from quality_routes import quality_routes
from disease_routes import disease_routes

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['MONGO_URI'] = 'mongodb+srv://jg-cabauatan:EIT7I1S7SCBaCJZO@itp-backend.a0fhlie.mongodb.net/db_kalamansi?retryWrites=true&w=majority'
app.config['MONGO_DB'] = 'db_kalamansi'

# Initialize database connection
db = initialize_database(app)

# Register quality and disease routes blueprints
app.register_blueprint(quality_routes)
app.register_blueprint(disease_routes)

if __name__ == '__main__':
    app.run(debug=True)
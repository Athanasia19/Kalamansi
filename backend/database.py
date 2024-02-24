from pymongo import MongoClient

def initialize_database(app):
    uri = app.config['MONGO_URI']
    return MongoClient(uri)[app.config['MONGO_DB']]
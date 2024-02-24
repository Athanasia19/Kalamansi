import joblib

def load_quality_model():
    return joblib.load('./model/kalamansi_logreg.pkl')

def load_disease_model():
    return joblib.load('./model/kalamansi_disease.pkl')
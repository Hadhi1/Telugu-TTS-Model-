import os

class Config:
    DEBUG = True
    TTS_LANGUAGE = 'te'
    UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')

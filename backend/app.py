from flask import Flask, request, send_file, jsonify
from flask_cors import CORS  # Import CORS
from tts import text_to_speech
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/tts', methods=['POST'])
def tts():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Call the TTS function from the tts module
    output_file = text_to_speech(text)

    # Send the generated audio file
    return send_file(output_file, mimetype='audio/mpeg')


if __name__ == '__main__':
    app.run(debug=True)

# Telugu Text-to-Speech Backend

This is a Flask backend for converting Telugu text to speech using the gTTS library.

## Installation

1. Clone the repository.
2. Install dependencies:
    \`\`\`bash
    pip install -r requirements.txt
    \`\`\`
3. Run the application:
    \`\`\`bash
    python app.py
    \`\`\`

## API

### /tts (POST)

- **Description**: Converts Telugu text to speech.
- **Request Body**: 
    \`\`\`json
    {
        "text": "నేను మీకు సహాయం చేయగలను"
    }
    \`\`\`
- **Response**: Returns an MP3 audio file with the speech.

## Configuration

- You can modify the language and other settings in \`config.py\`.

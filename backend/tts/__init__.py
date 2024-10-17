from gtts import gTTS
import os
import uuid

def text_to_speech(text: str):
    # Generate a unique filename using uuid
    filename = f"{uuid.uuid4()}.mp3"

    # Convert text to speech in Telugu
    tts = gTTS(text=text, lang='te')
    tts.save(filename)

    # Return the filename of the saved mp3 file
    return filename

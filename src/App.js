import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(''); // State for Telugu text
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      const data = await response.blob(); // Retrieve the audio file as a Blob
      const audioURL = URL.createObjectURL(data); // Create a URL for the audio Blob
      const audio = new Audio(audioURL);
      audio.play(); // Play the audio
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Telugu Text-to-Speech</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter Telugu text here..."
          rows="4"
          style={{ width: '100%' }}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Converting...' : 'Convert to Speech'}
        </button>
      </form>
    </div>
  );
}

export default App;

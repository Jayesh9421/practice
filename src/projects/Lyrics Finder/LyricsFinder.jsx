// src/components/LyricsFinder.js
import React, { useState } from 'react';
import axios from 'axios';

const LyricsFinder = () => {
  const [query, setQuery] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const searchLyrics = async () => {
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${query}`);
      setLyrics(response.data.lyrics);
      setError('');
    } catch (error) {
      setLyrics('');
      setError('Lyrics not found. Please try again.');
    }
  };

  return (
    <div>
      <h1>Lyrics Finder App</h1>
      <input 
        type="text" 
        placeholder="Enter song title or artist name" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={searchLyrics}>Search</button>
      {error && <p>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}
    </div>
  );
};

export default LyricsFinder;

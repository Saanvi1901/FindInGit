import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import './App.css';
import Search from './Search';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode);
  };

  const handleProfilePhoto = (photoUrl) => {
    setProfilePhoto(photoUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find in Git</h1>
        <div className="toggle-container">
          <label>
            <span>{darkMode ? 'Dark' : 'Light'} Mode</span>
            <Switch
              onChange={toggleDarkMode}
              checked={darkMode}
              offColor="#888"
              onColor="#000"
            />
          </label>
        </div>
        <Search onProfilePhotoChange={handleProfilePhoto} />
        {profilePhoto && (
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

function Search({ onProfilePhotoChange }) {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfile(response.data);
      onProfilePhotoChange(response.data.avatar_url); // Update the profile photo URL
    } catch (error) {
      console.error('Error fetching the GitHub profile', error);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {profile && (
        <div className="result-container">
          <h2>{profile.name}</h2>
          <p>@{profile.login}</p>
          <p>{profile.bio}</p>
          <div className="details">
            <div>
              <p>Repos</p>
              <p>{profile.public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>{profile.followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>{profile.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

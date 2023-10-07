import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <div class="Profile">
      {/* this is for creating new characters */}
      <div class="character-creation">
        <button class="character-creation-button"> Create Character </button>
      </div>
      {/* this is a single character profile */}
      <div class="character-profile">
        {/* <img class="character-art" src={}/> */}
        <div class="character-name">
          Sample Name Sample Last Name
        </div>
        <div class="character-info"></div>
        <div class="character-options"></div>
      </div>
    </div>
    )
}

export default Profile
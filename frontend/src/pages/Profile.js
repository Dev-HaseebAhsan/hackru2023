import React from 'react'
import './css/Profile.css';
import defaultArt from '../img/joe-average.png';
import logo from '../img/logo.png';
import * as Unicons from '@iconscout/react-unicons';


const Profile = () => {
  return (
    <div class="Profile">
      {/* Navigation Bar because navbar component refused to work*/}
      <div class='navbar'>
        <div class='navbar-container'>
          <img src={logo}/>
          <ul>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Log Out</a></li>
          </ul>
        </div>
      </div>

      {/* Created Character Example */}
      <div class='character-list'>
        <div class='character'>
          <div class='character-portrait-container'>
            <img class='character-portrait'/>
          </div>
          <div class='character-info-container'> 
            <p class = 'character-info' style={{fontWeight:'800'}}>Zenith Aetherious</p>
            <p class = 'character-info' id='race'>Human</p>
            <p class = 'character-info' id='character-level'>9</p>
            <p class = 'character-info' id='class-levels'>Sorcerer: 5, Warlock: 4</p>
          </div>
          <div class='character-menu'>
            <div class='edit-container'>

            </div>
            <div class='delete-container'>

            </div>
          </div>
        </div>
        

        {/* Character Creator Button */}
        <div class='character'>
          <div class='new-class-button-wrapper'>
            <button class='new-class-button'>+</button>
          </div>
        </div>
      </div>


      {/* this is for creating new characters
      <div class="character-list">
      <div class="character-profile">
       <img class="character-creation-button"/>
      </div>
        this is a single character profile
        <div class="character-profile">
          <img class="character-art" src={defaultArt}/>
          <div class="character-info-grid">
            <div class="character-name">
                Zenith Atherion
            </div>
            <div class="character-race">
                Daemon
            </div>
            <div class="character-lvl">
                9th Level
            </div>
            <div class="character-class">
                Sorcerer 6, Warlock 3
            </div>
          </div>
          <div class="character-options">
            <img class="edit-icon" src={defaultArt}/>
            <img class="delete-icon" src={defaultArt}/>
          </div>
        </div>
      </div> */}
    </div>
    )
}

export default Profile
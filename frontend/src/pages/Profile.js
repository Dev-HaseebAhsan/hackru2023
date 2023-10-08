import React from 'react'
import './css/Profile.css';
import defaultArt from '../img/joe-average.png';
import logo from '../img/logo.png';
import zenith from '../img/zenith-art.png';
import * as Unicons from '@iconscout/react-unicons';
import {Outlet, Link } from "react-router-dom"


const Profile = () => {
  return (
    <div class="Profile">
      {/* Navigation Bar because navbar component refused to work*/}
      <div class='navbar'>
        <div class='navbar-container'>
          <img src={logo}/>
          <ul>
            <li>
              <Link to="/profile">
                <Unicons.UilUser class='icon' size="1.5rem" color="white"/>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                <Unicons.UilSignout class='icon' size="1.5rem" color="white"/>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Created Character Example */}
      <div class='character-list'>
        <div class='character'>
          {/* Character image */}
          <img class='character-portrait' src={zenith}/>

          {/* Basic Character Information */}
          <div class='character-info-container'> 
            <p class = 'character-info' style={{fontWeight:'800'}}>Zenith Aetherious</p>
            <p class = 'character-info' id='race'>Human</p>
            <p class = 'character-info' id='character-level'>Level 9</p>
            <p class = 'character-info' id='class-levels'>Sorcerer: 5, Warlock: 4</p>
          </div>

          {/* Simple Option to Edit/Delete Character */}
          <div class='character-menu'>
            <button id='edit'>
              <Link to="/creator">
                <Unicons.UilEdit class='icon' size="40" color="white"/>
              </Link>
            </button>
            <button id='delete'>
              <Unicons.UilTrash class='icon' size="40" color="white"/>
            </button>
          </div>
        </div>
        

        {/* Character Creator Button */}
        <div class='character'>
          <div class='new-character-button-wrapper'>
            <button>
              <Link to="/creator">
                <Unicons.UilPlus class='icon' size="130" color="white"/>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile
import React from 'react';
import './css/Creator.css'
import defaultArt from '../img/joe-average.png';
import zenith from '../img/zenith-art.png';
import logo from '../img/logo.png';
import * as Unicons from '@iconscout/react-unicons';
import {Outlet, Link } from "react-router-dom"

function Creator() {
  var fighterDie = 0;
  var rangerDie = 0;
  var wizardDie = 0;
  var maxHealth = 0

  function heal(){
    if(fighterDie > 0){
      document.getElementById('healthPoints').innerHTML = Number( document.getElementById('healthPoints').innerHTML) + Math.round((Math.random()*9+1)) + Number(document.getElementById('ConMod').innerHTML);
      fighterDie--;
    }else if(rangerDie > 0){
      document.getElementById('healthPoints').innerHTML = Number( document.getElementById('healthPoints').innerHTML) + Math.round((Math.random()*9+1)) + Number(document.getElementById('ConMod').innerHTML);
      rangerDie--;
    }else if(wizard > 0){
      document.getElementById('healthPoints').innerHTML =Number( document.getElementById('healthPoints').innerHTML) +  Math.round((Math.random()*3+1)) + Number(document.getElementById('ConMod').innerHTML);
      wizardDie--;
    } else{
      document.getElementById('healthPoints').innerHTML = maxHealth;
    }
  }
  
  var fighter = 0;
  var ranger = 0;
  var wizard = 0;
  function adjustLevel(dif, className) {
    if(className === 'fighter'){
      fighter += dif;
      fighterDie = fighter;
      document.getElementById('lvl-fighter').innerHTML = fighter;
    }else if(className === 'ranger'){
      ranger += dif;
      rangerDie = ranger;

      document.getElementById('lvl-ranger').innerHTML = ranger;
    }else if(className === 'wizard'){
      wizard += dif;
      wizardDie = wizard;
      document.getElementById('lvl-wizard').innerHTML = wizard;
    }
    maxHealth = fighterDie*10 + rangerDie*10 + wizardDie*4;
  }

  function adjustScore(stat){
    const total = stat + 'Total';
    const race = stat + 'Race';
    const mod = stat + 'Mod';
    document.getElementById(total).innerHTML = Number(document.getElementById(race).textContent) + Number(document.getElementById(stat).value);
    document.getElementById(mod).innerHTML = Math.floor((document.getElementById(total).textContent-10)/2);
  }
  
  function addClass(){
    var className = document.getElementById('class').value;
    document.getElementById('className').innerHTML = className + ':';
  }

  function raceBonuses(){
    var race = document.getElementById('race').value;
    if(race === 'Human'){
      document.getElementById('Str' + 'Race').innerHTML = 1;
      document.getElementById('Dex' + 'Race').innerHTML = 1;
      document.getElementById('Con' + 'Race').innerHTML = 1;
      document.getElementById('Int' + 'Race').innerHTML = 1;
      document.getElementById('Wis' + 'Race').innerHTML = 1;
      document.getElementById('Cha' + 'Race').innerHTML = 1;
      document.getElementById('raceArt').src = {zenith};
    }
    if(race === 'Dwarf'){
      document.getElementById('Str' + 'Race').innerHTML = 0;
      document.getElementById('Dex' + 'Race').innerHTML = 0;
      document.getElementById('Con' + 'Race').innerHTML = 2;
      document.getElementById('Int' + 'Race').innerHTML = 0;
      document.getElementById('Wis' + 'Race').innerHTML = 0;
      document.getElementById('Cha' + 'Race').innerHTML = 0;
    }
    if(race === 'Elf'){
      document.getElementById('Str' + 'Race').innerHTML = 0;
      document.getElementById('Dex' + 'Race').innerHTML = 2;
      document.getElementById('Con' + 'Race').innerHTML = 0;
      document.getElementById('Int' + 'Race').innerHTML = 0;
      document.getElementById('Wis' + 'Race').innerHTML = 0;
      document.getElementById('Cha' + 'Race').innerHTML = 0;
    }
    document.getElementById('StrTotal').innerHTML = Number(document.getElementById('StrRace').textContent) + Number(document.getElementById('Str').value);
    document.getElementById('DexTotal').innerHTML = Number(document.getElementById('DexRace').textContent) + Number(document.getElementById('Dex').value);
    document.getElementById('ConTotal').innerHTML = Number(document.getElementById('ConRace').textContent) + Number(document.getElementById('Con').value);
    document.getElementById('IntTotal').innerHTML = Number(document.getElementById('IntRace').textContent) + Number(document.getElementById('Int').value);
    document.getElementById('WisTotal').innerHTML = Number(document.getElementById('WisRace').textContent) + Number(document.getElementById('Wis').value);
    document.getElementById('ChaTotal').innerHTML = Number(document.getElementById('ChaRace').textContent) + Number(document.getElementById('Cha').value);

    document.getElementById('StrMod').innerHTML = Math.floor((document.getElementById('StrTotal').textContent-10)/2);
    document.getElementById('DexMod').innerHTML = Math.floor((document.getElementById('DexTotal').textContent-10)/2);
    document.getElementById('ConMod').innerHTML = Math.floor((document.getElementById('ConTotal').textContent-10)/2);
    document.getElementById('IntMod').innerHTML = Math.floor((document.getElementById('IntTotal').textContent-10)/2);
    document.getElementById('WisMod').innerHTML = Math.floor((document.getElementById('WisTotal').textContent-10)/2);
    document.getElementById('ChaMod').innerHTML = Math.floor((document.getElementById('ChaTotal').textContent-10)/2);

    document.getElementById('raceName').innerHTML = race;

  }

  return (
    <div class="Creator">
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
      <div class="upper-char-info">
        <div class="stats">
          <div class="main-info">
              <div class="creator-section">
                <img class="creator-char-art" src={defaultArt}/>
                <input class="name" placeholder='Character Name'></input>
              </div>
            <div class="creator-section">
              <select name="race" id="race" class="input" onChange={() => raceBonuses()}>
                <option class="dropdown-display" defaultValue="Select">Select Race</option>
                <option class="dropdown-display" value="Human">Human</option>
                <option class="dropdown-display" value="Elf">Elf</option>
                <option class="dropdown-display" value="Dwarf">Dwarf</option>
              </select>
              </div>
            {/* <div class="creator-section">
              <select name="class" id="class" class="input class-input" onChange={() => addClass()}>
                <option class="dropdown-display" defaultValue="Select">Choose Class</option>
                <option class="dropdown-display" value="Fighter">Fighter</option>
                <option class="dropdown-display" value="Ranger">Ranger</option>
                <option class="dropdown-display" value="Wizard">Wizard</option>
              </select>
            </div> */}
        </div>
          <div class="score-table"> 
            <div class="table-item">Ability</div>
            <div class="table-item">Score</div>
            <div class="table-item">+</div>
            <div class="table-item">Racial</div>
            <div class="table-item">=</div>
            <div class="table-item">Total</div>
            <div class="table-item">Mod</div>
            <div class="table-item">Strength</div>
            <input type="number" id="Str" class="score"  onKeyUp={() => adjustScore('Str')}></input>
            <div class="table-item">+</div>
            <div class="table-item" id="StrRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item" id="StrTotal">0</div>
            <div class="table-item" id="StrMod">-1</div>
            <div class="table-item">Dexterity</div>
            <input type="number" id="Dex" class="score"  onKeyUp={() => adjustScore('Dex')}></input>            <div class="table-item">+</div>
            <div class="table-item" id="DexRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item"id="DexTotal">0</div>
            <div class="table-item"id="DexMod">-1</div>
            <div class="table-item">Constitution</div>
            <input type="number" id="Con" class="score"  onKeyUp={() => adjustScore('Con')}></input>            <div class="table-item">+</div>
            <div class="table-item" id="ConRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item"id="ConTotal">0</div>
            <div class="table-item"id="ConMod">-1</div>
            <div class="table-item">Intelligence</div>
            <input type="number" id="Int" class="score"  onKeyUp={() => adjustScore('Int')}></input>            <div class="table-item">+</div>
            <div class="table-item" id="IntRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item"id="IntTotal">0</div>
            <div class="table-item"id="IntMod">-1</div>
            <div class="table-item">Wisdom</div>
            <input type="number" id="Wis" class="score"  onKeyUp={() => adjustScore('Wis')}></input>            <div class="table-item">+</div>
            <div class="table-item" id="WisRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item" id="WisTotal">0</div>
            <div class="table-item"id="WisMod">-1</div>
            <div class="table-item">Charisma</div>
            <input type="number" id="Cha" class="score"  onKeyUp={() => adjustScore('Cha')}></input>            <div class="table-item">+</div>
            <div class="table-item" id="ChaRace">0</div>
            <div class="table-item">=</div>
            <div class="table-item"id="ChaTotal">0</div>
            <div class="table-item"id="ChaMod">-1</div>
          </div>
        </div>
      </div>
      <div class="lower-grid" id="lower-grid"> 
          <div class="lower-section">
              <div class="race-item">
                <img class="race-art" id="raceArt" src={defaultArt}/>
                <div class="added-name" id="raceName">Your Race</div>
              </div>
          </div>
          <div class="lower-section class-template">
          <div className="class-item">
          <div className="added-name" id="className">Fighter:</div>
             <div className="level">
               <a id="lvl-fighter">0</a>
             </div>
             <div className="lvl-adjust">
              <button className="small-button" onClick={() => adjustLevel(1,'fighter')}>+</button>
               <button className="small-button" onClick={() => adjustLevel(-1,'fighter')}>-</button>
             </div>
           </div>
           <div className="class-item">
          <div className="added-name" id="className">Ranger:</div>
             <div className="level">
               <a id="lvl-ranger">0</a>
             </div>
             <div className="lvl-adjust">
              <button className="small-button" onClick={() => adjustLevel(1,'ranger')}>+</button>
               <button className="small-button" onClick={() => adjustLevel(-1,'ranger')}>-</button>
             </div>
           </div>
           <div className="class-item">
          <div className="added-name" id="className">Wizard:</div>
             <div className="level">
               <a id="lvl-wizard">0</a>
             </div>
             <div className="lvl-adjust">
              <button className="small-button" onClick={() => adjustLevel(1,'wizard')}>+</button>
               <button className="small-button" onClick={() => adjustLevel(-1,'wizard')}>-</button>
             </div>
           </div>
          </div>
          <div class="lower-section character-status">
            <div className="status-item"> 
              <div></div>
              <div class="heading"> Status </div>
              <div></div>
              <div class="hp-icon">
                <Unicons.UilHeart class='icon' size="40" color="white"/>
                <div class="hp-num" id="healthPoints">18</div>
              </div>
              <div class="bar hp">
                20%
                <div class="hp-bar"></div>
              </div>
              <div class="hp-die" id="hit-die">
                <Unicons.UilBandAid class='icon' size="40" color="white"/>
                <button class="heal" onClick={() => heal()}></button>
              </div>
              <div class="mana-num">
                <Unicons.UilTear class='icon' size="40" color="white"/>
              </div>
              <div class="bar mana">
                80%
                <div class="mana-bar"></div>
              </div>              
              <div class="ac">
                <Unicons.UilShield class='icon' size="40" color="white"/>
                <div class="ac-num">12</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Creator
import React from 'react';
import './css/Creator.css'
import defaultArt from '../img/joe-average.png';

function Creator() {
  
  var level = 1;
  function adjustLevel(dif) {
    level += dif;
    document.getElementById('lvl').innerHTML = level;
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
    document.getElementById('className').innerHTML = className;
    document.getElementById('lower').innerHTML += document.getElementById('classes-template').innerHTML;
    document.getElementById('classes-template').innerHTML = '';
  }

  function raceBonuses(){
    var race = document.getElementById('race').value;
    console.log(race);
    if(race === 'Human'){
      document.getElementById('Str' + 'Race').innerHTML = 1;
      document.getElementById('Dex' + 'Race').innerHTML = 1;
      document.getElementById('Con' + 'Race').innerHTML = 1;
      document.getElementById('Int' + 'Race').innerHTML = 1;
      document.getElementById('Wis' + 'Race').innerHTML = 1;
      document.getElementById('Cha' + 'Race').innerHTML = 1;
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

    document.getElementById('className').innerHTML = race;

  }

  return (
    <div class="Creator">
      <div class="upper-char-info">
        <div class="stats">
          <div class="main-info">
              <div class="creator-section">
                <img class="creator-char-art" src={defaultArt}/>
                <input class="name" placeholder='Character Name'></input>
              </div>
            <div class="creator-section">
              <select name="race" id="race" class="input" onChange={() => raceBonuses()}>
                <option class="dropdown-display" defaultValue="Select">Choose Race</option>
                <option class="dropdown-display" value="Human">Human</option>
                <option class="dropdown-display" value="Elf">Elf</option>
                <option class="dropdown-display" value="Dwarf">Dwarf</option>
              </select>
              </div>
            <div class="creator-section">
              <select name="class" id="class" class="input class-input">
                <option class="dropdown-display" defaultValue="Select">Choose Class</option>
                <option class="dropdown-display" value="Fighter">Fighter</option>
                <option class="dropdown-display" value="Ranger">Ranger</option>
                <option class="dropdown-display" value="Wizard">Wizard</option>
              </select>
            </div>
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
          <div class="creator-section">
              
          </div>
          <div class="creator-section class-template">
          <div className="class-item">
             <div className="added-class-name" id="className">  </div>
             <div className="level">
               <a id="lvl">1</a>
             </div>
             <div className="lvl-adjust">
             <button className="small-button" onClick={() => adjustLevel(1)}>+</button>
               <button className="small-button" onClick={() => adjustLevel(-1)}>-</button>
             </div>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Creator
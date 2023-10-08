// function AddClass({className}) {
//     var level = 1;
//     function adjustLevel(dif) {
//       level += dif;
//       document.getElementById('lvl').innerHTML = level;
//     }
  
//     return (
//       <div class='template' id='class-template'> 
//         <div className="class-item">
//           <div className="added-class-name" id="className"> Temp </div>
//           <div className="level">
//             <a id="lvl">1</a>
//           </div>
//           <div className="lvl-adjust">
//             <button className="small-button" onClick={() => adjustLevel(1)}>+</button>
//             <button className="small-button" onClick={() => adjustLevel(-1)}>-</button>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default AddClass;

// import React from 'react';
// import './css/Creator.css'
// import defaultArt from '../img/joe-average.png';
// import AddClass from '../components/AddClass';

// function Creator() {
  
//   var level = 1;
//   function adjustLevel(dif) {
//     level += dif;
//     document.getElementById('lvl').innerHTML = level;
//   }

//   function adjustScore(stat){
//     const total = stat + 'Total';
//     const race = stat + 'Race';
//     const mod = stat + 'Mod';
//     console.log();
//     document.getElementById(total).innerHTML = Number(document.getElementById(race).textContent) + Number(document.getElementById(stat).value);
//     document.getElementById(mod).innerHTML = Math.floor((document.getElementById(total).textContent-10)/2);
//   }
  
//   function addClass(){
//     var className = document.getElementById('class').value;
//     document.getElementById('classes').innerHTML += <AddClass className= {className}></AddClass>;
//   }

//   return (
//     <div class="Creator">
//       <div class="upper-char-info">
//         <div class="stats">
//           <div class="main-info">
//               <div class="creator-section">
//                 <img class="creator-char-art" src={defaultArt}/>
//                 <input class="name" placeholder='Character Name'></input>
//               </div>
//             <div class="creator-section">
//               <select name="race" id="race" class="race">
//                 <option class="dropdown-display" defaultValue="Select">Choose Race</option>
//                 <option class="dropdown-display" value="Human">Human</option>
//                 <option class="dropdown-display" value="Elf">Elf</option>
//                 <option class="dropdown-display" value="Dwarf">Dwarf</option>
//               </select>
//               </div>
//             <div class="creator-section">
//               <div class="class-select">
//               <select name="class" id="class" class="class-input">
//                 <option class="dropdown-display" defaultValue="Select">Choose Class</option>
//                 <option class="dropdown-display" value="Fighter">Fighter</option>
//                 <option class="dropdown-display" value="Ranger">Ranger</option>
//                 <option class="dropdown-display" value="Wizard">Wizard</option>
//               </select>
//             <button class="small-button" onClick={() => addClass()}>+</button>
//             </div>
//             </div>
//         </div>
//           <div class="score-table"> 
//             <div class="table-item">Ability</div>
//             <div class="table-item">Score</div>
//             <div class="table-item">+</div>
//             <div class="table-item">Racial</div>
//             <div class="table-item">=</div>
//             <div class="table-item">Total</div>
//             <div class="table-item">Mod</div>
//             <div class="table-item">Strength</div>
//             <input type="number" id="Str" class="score"  onKeyUp={() => adjustScore('Str')}></input>
//             <div class="table-item">+</div>
//             <div class="table-item" id="StrRace">1</div>
//             <div class="table-item">=</div>
//             <div class="table-item" id="StrTotal"></div>
//             <div class="table-item" id="StrMod">-1</div>
//             <div class="table-item">Dexterity</div>
//             <input type="number" id="Dex" class="score"  onKeyUp={() => adjustScore('Dex')}></input>            <div class="table-item">+</div>
//             <div class="table-item" id="DexRace">0</div>
//             <div class="table-item">=</div>
//             <div class="table-item"id="DexTotal">8</div>
//             <div class="table-item"id="DexMod">-1</div>
//             <div class="table-item">Constitution</div>
//             <input type="number" id="Con" class="score"  onKeyUp={() => adjustScore('Con')}></input>            <div class="table-item">+</div>
//             <div class="table-item" id="ConRace">0</div>
//             <div class="table-item">=</div>
//             <div class="table-item"id="ConTotal">8</div>
//             <div class="table-item"id="ConMod">-1</div>
//             <div class="table-item">Intelligence</div>
//             <input type="number" id="Int" class="score"  onKeyUp={() => adjustScore('Int')}></input>            <div class="table-item">+</div>
//             <div class="table-item" id="IntRace">0</div>
//             <div class="table-item">=</div>
//             <div class="table-item"id="IntTotal">8</div>
//             <div class="table-item"id="IntMod">-1</div>
//             <div class="table-item">Wisdom</div>
//             <input type="number" id="Wis" class="score"  onKeyUp={() => adjustScore('Wis')}></input>            <div class="table-item">+</div>
//             <div class="table-item" id="WisRace">0</div>
//             <div class="table-item">=</div>
//             <div class="table-item" id="WisTotal">8</div>
//             <div class="table-item"id="WisMod">-1</div>
//             <div class="table-item">Charisma</div>
//             <input type="number" id="Cha" class="score"  onKeyUp={() => adjustScore('Cha')}></input>            <div class="table-item">+</div>
//             <div class="table-item" id="ChaRace">0</div>
//             <div class="table-item">=</div>
//             <div class="table-item"id="ChaTotal">8</div>
//             <div class="table-item"id="ChaMod">-1</div>
//           </div>
//         </div>
//       </div>
//       {/* Used to add classes to list*/}
//       <div class="classes" id="classes">

//       </div>
//     </div>
//   )
// }

// export default Creator

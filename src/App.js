import {useState, useEffect} from "react";

import SpellFilterForm from "./components/SpellFilterForm/SpellFilterForm";
import SpellList from "./components/SpellList/SpellList";
import './App.css';

function App() {

  const [spellIndexes, setSpellIndexes] = useState([]);
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);

  // function that fetches Dungeons and Dragons API Spells info, using array of indexes from line 30 to insert into fetch request
  const fetchSpellsInfo = (indexes) => {
    let promises = indexes.map(index => fetch(`https://www.dnd5eapi.co/api/spells/${index}`));

    Promise.all(promises)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then((spells) => {
        setSpells(spells)
        setFilteredSpells(spells)      
      });
  }
// fetches spell indexes in order to set and use in fetching individual spell info
  useEffect(()=>{
    fetch(`https://www.dnd5eapi.co/api/spells`)
    .then((res)=>res.json())
    .then((data)=>{
      let indexes = data.results.map(a => a.index);
      setSpellIndexes(indexes);
    })
  },[]);

  useEffect(()=>{ 
    fetchSpellsInfo(spellIndexes);
  },[spellIndexes])

  const handleUserFilter = (userInput) => {
    const searchedSpells = spells.filter((spell) => {
      return spell.name.toUpperCase().includes(userInput.toUpperCase());
    });
    setFilteredSpells(searchedSpells);
  };


  return (
    <main>
      <h1>Dungeons and Dragons Spell Book</h1>
      <div id="top">
        <SpellFilterForm onUserInput={handleUserFilter}/>
      </div>
      <SpellList spells = {filteredSpells} />
    </main>
  )
}

export default App;

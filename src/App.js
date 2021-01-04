import {useState, useEffect} from "react";

import SpellFilterForm from "./components/SpellFilterForm";
import SpellList from "./components/SpellList/SpellList";
import './App.css';

function App() {
  // const [raceIndexes, setRaceIndexes] = useState([]);
  // const [races, setRaces] = useState([]);

  // const [classIndexes, setClassIndexes] = useState([]);
  // const [classes, setClasses] = useState([]);

  const [spellIndexes, setSpellIndexes] = useState([]);
  const [spells, setSpells] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);

  // const fetchRacesInfo = (indexes) => {
  //   let promises = indexes.map(index => fetch(`https://www.dnd5eapi.co/api/races/${index}`));

  //   Promise.all(promises)
  //     .then(responses => Promise.all(responses.map(r => r.json())))
  //     .then(races => setRaces(races))
  // }

  // useEffect(()=>{
  //   fetch(`https://www.dnd5eapi.co/api/races`)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     let indexes = data.results.map(a => a.index);
  //     setRaceIndexes(indexes);
  //   })
    
  // },[]);

  // useEffect(()=>{ 
  //   fetchRacesInfo(raceIndexes);
  // },[raceIndexes])

  // const fetchClassesInfo = (indexes) => {
  //   let promises = indexes.map(index => fetch(`https://www.dnd5eapi.co/api/classes/${index}`));

  //   Promise.all(promises)
  //     .then(responses => Promise.all(responses.map(r => r.json())))
  //     .then(classes => setClasses(classes))
  // }

  // useEffect(()=>{
  //   fetch(`https://www.dnd5eapi.co/api/classes`)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     let indexes = data.results.map(a => a.index);
  //     setClassIndexes(indexes);
  //   })
    
  // },[]);

  // useEffect(()=>{ 
  //   fetchClassesInfo(classIndexes);
  // },[classIndexes])

  const fetchSpellsInfo = (indexes) => {
    let promises = indexes.map(index => fetch(`https://www.dnd5eapi.co/api/spells/${index}`));

    Promise.all(promises)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then((spells) => {
        setSpells(spells)
        setFilteredSpells(spells)      
      });
  }

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

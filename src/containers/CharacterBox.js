import {useEffect, useState} from "react"

const CharacterBox = () => {


  // https://www.dnd5eapi.co/api/races/{index}
  
  const [races, setRaces] = useState([]);
  const [randomRace, setRandomRace] = useState('');

  const fetchRaces = () => {
    const url = `https://www.dnd5eapi.co/api/races`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setRaces(data.results);
      });
  }
  const handleClick = () => {
    const random = races[Math.floor(Math.random() * races.length)];
    setRandomRace(random.name);//value assigned here
  };

  useEffect(() => {
    fetchRaces();
  }, [])

  return (
    <>
    <h1>Randomise a D&D Character!</h1>
    <button onClick={handleClick}>Click me</button>
    <p>{randomRace}</p>
    
    </>
  )
}

export default CharacterBox;
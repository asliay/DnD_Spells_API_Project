// import {useEffect, useState} from "react"

// import CharacterRandomiser from "../components/CharacterRandomiser";

// const CharacterBox = () => {


//   // https://www.dnd5eapi.co/api/races/{index}
  
//   const [races, setRaces] = useState([]);
//   const [randomRace, setRandomRace] = useState('');
//   const [classes, setClasses] = useState([]);
//   const [randomClass, setRandomClass] = useState('');

//   const fetchRaces = () => {
//     const racesUrl = `https://www.dnd5eapi.co/api/races`;
//     fetch(racesUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.results);
//         setRaces(data.results);
//       });
//   }

//   const fetchClasses = () => {
//     const classesUrl = `https://www.dnd5eapi.co/api/classes`
//     fetch(classesUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.results);
//         setClasses(data.results);
//       });
//   }
//   const getRandomRace = () => {
//     const randomRace = races[Math.floor(Math.random() * races.length)];
//     setRandomRace(randomRace); //value assigned here
//   }

//   const getRandomClass = () => {
//     const randomClass = classes[Math.floor(Math.random() * classes.length)];
//     setRandomClass(randomClass);
//   }

//   const handleClick = () => {
//     getRandomRace();
//     getRandomClass();
//   };

//   useEffect(() => {
//     fetchRaces();
//     fetchClasses();
//   }, [])

//   return (
//     <>
//     <h1>Randomise a D&D Character!</h1>
//     <CharacterRandomiser 
//       handleClick = {handleClick} 
//       randomRace = {randomRace} 
//       randomClass = {randomClass}/>
    
    
//     </>
//   )
// }

// export default CharacterBox;
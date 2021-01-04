import "./SpellFilterForm/SpellFilterForm";

const SpellFilterForm = ({ onUserInput }) => {

  const handleFilterInput = (event) => {
    const userInput = event.target.value;
    onUserInput(userInput);
  };

  return (
    <>
      <span>Search Spells: </span>
      <input id="spell-search" 
        type="text" 
        placeholder="e.g. Guiding Bolt"
        onChange={handleFilterInput}
      />
    
    </>
  )
};

export default SpellFilterForm;
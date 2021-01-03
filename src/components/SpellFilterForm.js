const SpellFilterForm = ({ onUserInput }) => {

  const handleFilterInput = (event) => {
    const userInput = event.target.value;
    onUserInput(userInput);
  };

  return (
    <>
      <span>Spells Search: </span>
      <input 
        type="text" 
        placeholder="search..."
        onChange={handleFilterInput}
      />
    </>
  )
};

export default SpellFilterForm;
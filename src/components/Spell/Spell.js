import "./Spell.css"

const Spell = ({spellInfo}) => {

  
  const spellClasses = spellInfo.classes.map((classes => (classes.name))).join(", ")

  return (
    <>
    <h2 id="spell-name">{spellInfo.name}</h2>
    <div id="spell-info">
      <p id="spell-level"> 
      {/* Ternary operator checking spell level and rendering appropriate info and ritual boolean (level 0 spells are referred to as cantrips but just 0 in the API)*/ }
        {spellInfo.level > 0 ? `Level ${spellInfo.level} ${spellInfo.school['name']}` : `${spellInfo.school['name']} Cantrip`} {spellInfo.ritual ? ` (ritual)` : null}
        </p>
      <p id="spell-casting-time">Casting Time: {spellInfo.casting_time}</p>
      <p id="spell-classes">Class: {spellClasses}</p>
      <p id="spell-range">Range: {spellInfo.range}</p>
      {/* .join() allows components array to be rendered seperated by comma */}
      <p id="spell-components">
        Components: {spellInfo.components.join(", ")} {spellInfo.material ? `(${spellInfo.material.slice(0, -1)})` : null}
      </p>
      <p id="spell-duration">Duration: {spellInfo.duration}</p>
    </div>
      <p id="spell-desc">{spellInfo.desc}</p>
      <hr/>
    </>
  )
}

export default Spell;
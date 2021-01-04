import "./Spell.css"

const Spell = ({spellInfo}) => {

  let spellLevel;
  if (spellInfo.level > 0) {
    spellLevel = `Level ${spellInfo.level} ${spellInfo.school['name']}`
  }
  else {
    spellLevel = `${spellInfo.school['name']} Cantrip`
  };

  let spellMaterials;
  if (spellInfo.material) spellMaterials = ` (${spellInfo.material})`

  return (
    <div id="spell-wrapper">
      <h4 id="spell-name">{spellInfo.name}</h4>
      <p id="spell-level">{spellLevel}</p>
      <p id="spell-casting-time">Casting Time: {spellInfo.casting_time}</p>
      <p id="spell-range">Range: {spellInfo.range}</p>
      <p id="spell-components">Components: {spellInfo.components.join(", ")}{spellMaterials}</p>
      <p id="spell-duration">Duration: {spellInfo.duration}</p>
      <p id="spell-desc">{spellInfo.desc}</p>
    </div>
  )
}

export default Spell;
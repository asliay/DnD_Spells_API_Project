import "./Spell.css"

const Spell = ({spellInfo}) => {

  let spellLevel;
  // checks spell level in order to render accurately (cantrips are technically spell level 0 but are referred to as cantrips)
  if (spellInfo.level > 0) {
    spellLevel = `Level ${spellInfo.level} ${spellInfo.school['name']}`
  }
  else {
    spellLevel = `${spellInfo.school['name']} Cantrip`
  };

  let spellMaterials;
  // only renders spell material if it exists
  if (spellInfo.material) spellMaterials = ` (${spellInfo.material})`

  let spellRitual;
  // checks whether ritual === true before rendering
  if (spellInfo.ritual) spellRitual = ` (ritual)`

  return (
    <>
    <h3 id="spell-name">{spellInfo.name}</h3>
    <div id="spell-info">
      <p id="spell-level">{spellLevel} {spellRitual}</p>
      <p id="spell-casting-time">Casting Time: {spellInfo.casting_time}</p>
      <p id="spell-range">Range: {spellInfo.range}</p>
      {/* .join() allows components array to be rendered seperated by comma */}
      <p id="spell-components">Components: {spellInfo.components.join(", ")}{spellMaterials}</p>
      <p id="spell-duration">Duration: {spellInfo.duration}</p>
    </div>
      <p id="spell-desc">{spellInfo.desc}</p>
      <hr/>
    </>
  )
}

export default Spell;
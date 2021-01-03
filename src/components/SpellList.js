import Spell from "./Spell";


const SpellList = ({spells}) => {

  const spellNodes = spells.map((spell) => {
    return (
      <Spell spellInfo ={spell} key = {spell.index} />
    )
  })
  
return(
  <section id="spell-list">
    {spellNodes}
  </section>
  )
}

export default SpellList;
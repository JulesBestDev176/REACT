import {useState} from "react"

function Composant() {
  const [nom, setNom] = useState("jules");
  return (
    <div>
      <form>
        <label>Entrer votre nom : </label>
        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
        <p>Votre nom est : {nom}</p>
      </form>
    </div>
  )
}

export default Composant

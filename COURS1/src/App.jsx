import Composant from "./composants/Composant"
function App() {
  const titre1 = "Bonjour"
  return (
    <>
      <h2>{titre1}</h2>
      <Composant/>
      <input type="text"/>
    </>
  )
}


export default App

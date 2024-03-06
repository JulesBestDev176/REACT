import Composant from "./composants/Composant"
import Toggle from "./composants/Toggle"
import User from "./composants/user"
function App() {
  const titre1 = "Bonjour"
  return (
    <>
      <h2>{titre1}</h2>
      {/* <Composant/>
      <Toggle/> */}
      <User/>
    </>
  )
}


export default App

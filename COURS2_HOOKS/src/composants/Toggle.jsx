import {useState} from "react"

function Toggle() {
    const [isValid, setIsValid] = useState(false);

    return(
        <>
            <button onClick={() => setIsValid(!isValid)}>{isValid ? "Cacher" : "Afficher"}</button>
            {isValid && <p>Ce texte est maintenant visible</p>}
        </>
    )
}

export default Toggle
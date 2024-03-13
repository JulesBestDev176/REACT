import { useState } from "react";

function Formulaire() {
    
    const [user, setUser] = useState({
        nom : "Fall"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        
        setUser(preState => ({
            ...preState,
            [name]: value,
        }))
    }

    // const handleSubmit = () => {

    // }

    return (
        <>
            <form>
                <label htmlFor="nom">Nom</label><br />
                <input type="text" name="nom" onChange={handleChange} /><br /><br />
                <button type="submit">Enregistrer</button>
            </form>
            <p>{user.nom}</p>
        </>
    )
}

export default Formulaire
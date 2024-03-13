import { useState } from "react"

function User() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(preState => ({
            ...preState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
               name="firstname"
               value={formData.firstname}
               placeholder="firstname"
               onChange={handleChange}
        /><br/> <br/>
        <input type="text"
               name="lastname"
               value={formData.lastname}
               placeholder="lastname"
               onChange={handleChange}
        /><br/> <br/>
        <input type="email"
               name="email"
               value={formData.email}
               placeholder="email"
               onChange={handleChange}
        /><br/> <br/>
        <input type="submit" value="Enregistrer"/><br/> <br/>
      </form>
      <div>
        <p>Nom : {formData.firstname}</p>
        <p>Prenom : {formData.lastname}</p>
        <p>Email : {formData.email}</p>
      </div>
    </div>
  )
}

export default User

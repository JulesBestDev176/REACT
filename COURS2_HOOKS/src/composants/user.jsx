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
        />
        <input type="text"
               name="lastname"
               value={formData.lastname}
               placeholder="lastname"
               onChange={handleChange}
        />
        <input type="email"
               name="email"
               value={formData.email}
               placeholder="email"
               onChange={handleChange}
        />
        <input type="submit" value="Enregistrer"/>
      </form>
    </div>
  )
}

export default User

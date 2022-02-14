import { useState } from "react";

export const Contacto = () => {

    const [values, setvalues] = useState({
        nombre: "",
        email: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.name);
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado");
    }

    return (

        <main className="main-contacto">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre" />
                <input type="email" placeholder="Email" value={values.email} onChange={handleInputChange} name="email" />
                <input type="submit" value="ENVIAR" />
            </form>
        </main>

    )

}
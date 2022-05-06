import { useState } from "react";
import { BtnMain } from "../BtnMain/BtnMain";

export const Contacto = () => {

    const [values, setvalues] = useState({
        nombre: "",
        email: "",
        texto: ""
    })

    const handleInputChange = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main className="main-contacto">
            <form onSubmit={handleSubmit} className="form-contacto">
                <input type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre" className="inputForm" />
                <input type="email" placeholder="Email" value={values.email} onChange={handleInputChange} name="email" className="inputForm" />
                <textarea placeholder="En qué te podemos ayudar?" value={values.texto} onChange={handleInputChange} name="texto" />
                <BtnMain text="ENVIAR"/>
            </form>
        </main>
    )
}
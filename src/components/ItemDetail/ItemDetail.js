import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, img, nombre, precio, categoria, descripcion, stock }) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        if (cantidad === 0) return
        const addItem = {
            id, nombre, precio, stock, cantidad
        }
        console.log(addItem);
    }

    return (

        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h5>Precio: ${precio}</h5>

            <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />

            <button onClick={handleAgregar}>agregar al carrito</button>
        </div>

    )

}
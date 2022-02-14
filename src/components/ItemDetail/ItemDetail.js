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

        <main className="main-itemDetail">
            <div className="body-itemDetail">
                <div className="itemDetail-row itemDetail-row1">
                    <div className="img-itemDetail">
                        <img src={img} alt={nombre} />
                    </div>
                    <div>
                        <h3 className="titulo-itemDetail">{nombre}</h3>
                        <p className="descripcion-itemDetail">{descripcion}</p>
                        <p className="precio-itemDetail">${precio}</p>
                        <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                        <button onClick={handleAgregar} className="btn-agregar">agregar al carrito</button>
                    </div>
                </div>
            </div>
        </main>

    )

}
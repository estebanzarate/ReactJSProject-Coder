import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ id, img, nombre, precio, descripcion, stock }) => {

    const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        if (cantidad === 0) return
        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad, img
            }
            agregarAlCarrito(addItem);
        }
    }

    return (

        <main className="main-itemDetail">
            <div className="body-itemDetail">
                <div className="itemDetail-col">
                    <img src={img} alt={nombre} />
                </div>
                <div className="itemDetail-col">
                    <h3 className="titulo-itemDetail">{nombre}</h3>
                    <p className="descripcion-itemDetail">{descripcion}</p>
                    <p className="precio-itemDetail">${precio}</p>
                    {
                        isInCart(id)
                            ? <Link to="/cart" className="btn btn-terminarCompra">terminar compra</Link>
                            :
                            <>
                                <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                                <button
                                    onClick={handleAgregar}
                                    className="btn btn-agregar"
                                    disabled={cantidad === 0}
                                >
                                    agregar al carrito
                                </button>
                            </>
                    }
                </div>
            </div>
        </main>
    )
}
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ id, img, nombre, precio, categoria, descripcion, stock }) => {

    const [cantidad, setCantidad] = useState(0)

    const { cart, agregarAlCarrito, isInCart } = useContext(CartContext)
    console.log(cart);

    const handleAgregar = () => {
        if (cantidad === 0) return
        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            agregarAlCarrito(addItem);
        }
    }

    return (

        <main className="main-itemDetail">
            <div className="body-itemDetail">
                <div className="itemDetail-row itemDetail-row1">
                    <div className="img-itemDetail">
                        <img src={img} alt={nombre} />
                    </div>
                    <div>
                        <div>
                            <h3 className="titulo-itemDetail">{nombre}</h3>
                        </div>
                        <div>
                            <p className="descripcion-itemDetail">{descripcion}</p>
                        </div>
                        <div>
                            <p className="precio-itemDetail">${precio}</p>
                        </div>
                        {
                            isInCart(id)
                                ? <div><Link to="/cart" className="btn-terminarCompra">Terminar compra</Link></div>
                                :
                                <div>
                                    <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                                    <button onClick={handleAgregar} className="btn-agregar">agregar al carrito</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </main>

    )

}
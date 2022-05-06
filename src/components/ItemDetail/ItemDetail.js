import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { BtnMain } from "../BtnMain/BtnMain"

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

        <div className="itemDetail">
            <div className="col">
                <img src={img} alt={nombre} />
            </div>
            <div className="col">
                <h3 className="title">{nombre}</h3>
                <p className="desc">{descripcion}</p>
                <p className="price">${precio}</p>
                {
                    isInCart(id)
                        ? <Link to="/cart">
                            <BtnMain text="Terminar Compra"/>
                        </Link>
                        :
                        <>
                            <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                            <BtnMain
                                text="agregar al carrito"
                                fct={handleAgregar}
                                disabled={cantidad === 0}
                            />
                        </>
                }
            </div>
        </div>
    )
    
}
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import emptyCart from "../../images/emptycart.png"
import { BsTrash } from "react-icons/bs";

export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="containEmptyCart">
                <div className="emptyCart">
                    <h2>Tu carrito está vacío</h2>
                    <img src={emptyCart} alt="emptyCart" className="emptyCartImg" />
                    <Link to="/">
                        <button className="btn">VOLVER</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            < main className="main-cart" >
                <h2 className="title-cart">Tu compra</h2>
                <div className="container-mainCart">
                    <div className="container-prodCart">
                        {
                            cart.map((item) => (
                                <div key={item.id} className="body-prodCart">
                                    <img src={item.img} alt={item.nombre} className="img-prodCart" />
                                    <p className="cantidad-prodCart">Cantidad: <span className="prod-cantidad">{item.cantidad}</span></p>
                                    <p className="precio-prodCart">Precio: <span className="priceNum">${item.cantidad * item.precio}</span></p>
                                    <button onClick={() => eliminarItem(item.id)} className="btn btnDelete"><BsTrash /></button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="total-cart">
                        <h2 className="total-title">Total: ${totalCart()}</h2>
                        <div>
                            <button onClick={vaciarCart} className="btn">Vaciar carrito</button>
                            <Link to="/checkout" className="btn">Finalizar compra</Link>
                        </div>
                    </div>
                </div>
            </ main>
        </>
    )
}
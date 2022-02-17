import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    return (

        < main className="main-cart" >
            <h2 className="title-cart">Tu compra</h2>
            <div className="container-mainCart">
                <div className="container-prodCart">
                    {
                        cart.map((item) => (
                            <div key={item.id} className="body-prodCart">
                                <img src={item.img} alt={item.nombre} className="img-prodCart" />
                                <h4 className="title-prodCart">{item.nombre}</h4>
                                <p className="cantidad-prodCart">Cantidad: {item.cantidad}</p>
                                <p className="precio-prodCart">Precio: ${item.cantidad * item.precio}</p>
                                <button onClick={() => eliminarItem(item.id)} className="btn">Eliminar</button>
                            </div>
                        ))
                    }
                </div>
                <div className="total-cart">
                    <h2 className="total-title">Total: ${totalCart()}</h2>
                    <div>
                        <button onClick={vaciarCart} className="btn">Vaciar carrito</button>
                        <button className="btn">Finalizar compra</button>
                    </div>
                </div>
            </div>
        </ main>

    )

}
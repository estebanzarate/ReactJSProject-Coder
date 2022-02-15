import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    return (

        <div>
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
                    </div>
                ))
            }

            <hr />
            <h2>Total: ${totalCart()}</h2>
            <div>
                <button onClick={vaciarCart}>Vaciar carrito</button>
                <button>Finalizar compra</button>
            </div>
        </div>

    )

}
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import cartIco from '../../images/shopping-cart.png'

export const CarTWidget = () => {

    const { cantidadCart, totalCart } = useContext(CartContext)

    return (
        <Link to="/cart" className='cart-widget'>
            <img src={cartIco} alt="logo" />
            <span>{cantidadCart()}</span>
            <span>{totalCart()}</span>
        </Link>
    )
}
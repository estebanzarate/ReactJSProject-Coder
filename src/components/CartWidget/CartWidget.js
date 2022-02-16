import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import cartIco from '../../images/shopping-cart.png'

export const CarTWidget = () => {

    const { cantidadCart } = useContext(CartContext)

    return (
        <Link to="/cart" className='cart-widget'>
            <img src={cartIco} alt="logo" />
            <span className='cantidadCart'>{cantidadCart()}</span>
        </Link>
    )
}
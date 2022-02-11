import { CarTWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <h1>LUVIKUP</h1>
            </Link>

            <nav>
                <Link to="/nosotros" className="header-link">nosotros</Link>
                <Link to="/productos" className="header-link">productos</Link>
                <Link to="/contacto" className="header-link">contacto</Link>
            </nav>
            <CarTWidget />
        </header>
    )
}
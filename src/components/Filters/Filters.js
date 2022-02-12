import { Link } from "react-router-dom"

export const Filters = () => {

    return (

        <aside className="aside-productos">
            <Link to="/productos/cantantes" className="aside-link">Cantantes</Link>
            <Link to="/productos/mundopica" className="aside-link">El Mundo de Pica Pau</Link>
            <Link to="/productos/pokemon" className="aside-link">Pokemón</Link>
            <Link to="/productos/starwars" className="aside-link">Star Wars</Link>
            <Link to="/productos/superheroes" className="aside-link">Superhéroes</Link>
        </aside>

    )

}
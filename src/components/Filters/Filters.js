import { Link } from "react-router-dom"

export const Filters = () => {

    return (

        <aside className="asideProducts">
            <Link to="/productos/cantantes" className="asideLink">Cantantes</Link>
            <Link to="/productos/mundopica" className="asideLink">El Mundo de Pica Pau</Link>
            <Link to="/productos/pokemon" className="asideLink">Pokemón</Link>
            <Link to="/productos/starwars" className="asideLink">Star Wars</Link>
            <Link to="/productos/superheroes" className="asideLink">Superhéroes</Link>
        </aside>

    )

}
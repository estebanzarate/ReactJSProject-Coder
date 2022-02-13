import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, img, nombre, precio, categoria, descripcion, stock }) => {

    return (

        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h5>Precio: ${precio}</h5>
            <ItemCount max={stock} />
        </div>

    )

}
export const ItemDetail = ({ id, imagen, nombre, precio, categoria, descripcion }) => {

    return (

        <div>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
            <p>{descripcion}</p>
            <h5>Precio: ${precio}</h5>
        </div>

    )

}
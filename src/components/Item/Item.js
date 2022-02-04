export const Item = ({ id, nombre, imagen, precio }) => {

    return (

        <div className="card">
            <img src={imagen} alt={nombre} className="card-img" />
            <div className="card-body">
                <p className="card-price">${precio}</p>
                <h3 className="card-title">{nombre}</h3>
            </div>
            <div className="btn-container">
                <button className="card-btn">COMPRAR</button>
            </div>
        </div>

    )

}
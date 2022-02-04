import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {

    return (

        <>
            <h1>Productos</h1>
            <div className="card-grid">
                {products.map(el => <Item key={el.id} {...el} />)}
            </div>
        </>

    )

}
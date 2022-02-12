import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {

    return (

        <main className="main-productos">
            <div className="card-grid">
                {products.map(el => <Item key={el.id} {...el} />)}
            </div>
        </main>

    )

}
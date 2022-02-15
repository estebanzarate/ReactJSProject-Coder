import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import './styles/styles.scss';
import { Nosotros } from "./Components/Nosotros/Nosotros"
import { Contacto } from "./Components/Contacto/Contacto"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext"
import { Cart } from "./Components/Cart/Cart"

function App() {

	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/productos/:categoria" element={<ItemListContainer />} />
					<Route path="/detail/:itemId" element={<ItemDetailContainer />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import './styles/styles.scss';
import { Nosotros } from "./Components/Nosotros/Nosotros"
import { Contacto } from "./Components/Contacto/Contacto"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext"
import { Cart } from "./Components/Cart/Cart"
import { Footer } from "./Components/Footer/Footer"
import { Checkout } from "./Components/Checkout/Checkout"

function App() {

	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Nosotros />} />
					<Route path="/productos" element={<ItemListContainer />} />
					<Route path="/productos/:categoria" element={<ItemListContainer />} />
					<Route path="/detail/:itemId" element={<ItemDetailContainer />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</CartProvider>
	)
}

export default App;
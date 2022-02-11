import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./Container/ItemListContainer/ItemListContainer";
import './styles/styles.scss';
import { Nosotros } from "./components/Nosotros/Nosotros"
import { Contacto } from "./components/Contacto/Contacto"
import { ItemDetailContainer } from "./Container/ItemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/detail/:itemId" element={<ItemDetailContainer />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/productos/:categoria" element={<ItemListContainer />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>

		</BrowserRouter>
	)
}

export default App;
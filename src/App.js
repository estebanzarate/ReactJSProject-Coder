import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import './styles/styles.scss';
import { Nosotros } from "./Components/Nosotros/Nosotros"
import { Contacto } from "./Components/Contacto/Contacto"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";

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
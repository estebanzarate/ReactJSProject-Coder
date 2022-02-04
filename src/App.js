import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./container/ItemListContainer";
import './styles/styles.scss';

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<ItemListContainer greeting="HOLA PERREKEs" />
			</main>
		</>
	)
}

export default App;
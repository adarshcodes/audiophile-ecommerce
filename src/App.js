import "./App.scss";
import ButtonProductPeru from "./components/buttons/ButtonProductPeru";
import ButtonProductOutline from "./components/buttons/ButtonProductOutline";
import ButtonShop from "./components/buttons/ButtonShop";

function App() {
	return (
		<div className="App">
			<ButtonProductPeru />
			<ButtonProductOutline />
			<ButtonShop />
		</div>
	);
}

export default App;

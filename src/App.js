import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Persistent from "./components/Persistent/Persistent";
import Home from "./routes/Home/Home";
import Headphones from "./routes/Headphones/Headphones";
import Speakers from "./routes/Speakers/Speakers";
import Earphones from "./routes/Earphones/Earphones";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

function App() {
	return (
		<main className="app">
			<Routes>
				<Route path="/" element={<Persistent />}>
					<Route index element={<Home />} />
					<Route path="headphones" element={<Headphones />} />
					<Route path="speakers" element={<Speakers />} />
					<Route path="earphones" element={<Earphones />} />
				</Route>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</main>
	);
}

export default App;

import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import Home from "./routes/Home/Home";
import Headphones from "./routes/Headphones/Headphones";
import Speakers from "./routes/Speakers/Speakers";
import Earphones from "./routes/Earphones/Earphones";
import Footer from "./parts/Footer/Footer";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

function NavFooter() {
	return (
		<Fragment>
			<NavBar />
			<Footer />
		</Fragment>
	);
}

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<NavFooter />}>
					<Route index element={<Home />} />
					<Route path="headphones" element={<Headphones />} />
					<Route path="speakers" element={<Speakers />} />
					<Route path="earphones" element={<Earphones />} />
				</Route>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;

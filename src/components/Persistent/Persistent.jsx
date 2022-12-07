import React, { Fragment } from "react";

import NavBar from "../Navbar/NavBar";
import ProductsCard from "../ProductsCard/ProductsCard";
import Footer from "../../parts/Footer/Footer";

export default function Persistent() {
	const [nav, setNav] = React.useState(false);

	return (
		<Fragment>
			<div className={`nav-tab-mob ${nav ? "toggle-nav" : null}`}>
				<ProductsCard />
			</div>
			<NavBar nav={nav} setNav={setNav} />

			<Footer />
		</Fragment>
	);
}

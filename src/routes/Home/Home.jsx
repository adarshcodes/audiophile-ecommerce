import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./home.styles.scss";

import Header from "../../parts/Header/Header";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Zx9 from "../../components/Zx9/Zx9";
import Zx7 from "../../components/Zx7/Zx7";
import Yx1 from "../../components/Yx1/Yx1";

export default function Home() {
	return (
		<Fragment>
			<Helmet>
				<title>Audiophile | Home</title>
			</Helmet>
			<Header />
			<section className="home-section">
				<ProductsCard />
				<Zx9 />
				<Zx7 />
				<Yx1 />
			</section>
		</Fragment>
	);
}

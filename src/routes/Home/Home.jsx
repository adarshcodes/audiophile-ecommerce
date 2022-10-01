import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./home.styles.scss";

import Header from "../../parts/Header/Header";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

export default function Home() {
	return (
		<Fragment>
			<Helmet>
				<title>Audiophile | Home</title>
			</Helmet>
			<Header />
			<ProductsCard />
		</Fragment>
	);
}

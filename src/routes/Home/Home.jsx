import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./home.styles.scss";

import Header from "../../parts/Header/Header";

export default function Home() {
	return (
		<Fragment>
			<Helmet>
				<title>Audiophile | Home</title>
			</Helmet>
			<Header />
		</Fragment>
	);
}

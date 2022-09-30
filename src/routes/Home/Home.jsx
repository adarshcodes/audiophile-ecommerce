import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import "./home.styles.scss";

export default function Home() {
	return (
		<Fragment>
			<Helmet>
				<title>Audiophile | Home</title>
			</Helmet>
			<div>This is home page</div>
		</Fragment>
	);
}

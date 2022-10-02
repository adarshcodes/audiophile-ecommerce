import React from "react";

import "./header.styles.scss";
import ProductSummary from "../../components/ProductsSummary/ProductSummary";

const newProduct = {
	name: "XX99 Mark II Headphones",
	new: true,
	description:
		"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
	buttonPeru: true,
};

export default function Header() {
	return (
		<header className="header">
			<ProductSummary newProduct={newProduct} />
		</header>
	);
}

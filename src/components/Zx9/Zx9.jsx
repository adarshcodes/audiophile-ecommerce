import React from "react";

import "./zx9.styles.scss";

import ImgZ from "../../assets/images/home/desktop/image-speaker-zx9.png";
import ProductSummary from "../ProductsSummary/ProductSummary";

const newProduct = {
	name: "ZX9 SPEAKER",
	new: false,
	description:
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
	buttonPeru: false,
};

export default function Zx9() {
	return (
		<div className="zx9">
			<img src={ImgZ} alt="zx9-speaker" className="zx9-speaker" />
			<ProductSummary newProduct={newProduct} />
		</div>
	);
}

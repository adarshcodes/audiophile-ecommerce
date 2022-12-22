import React from "react";
import { useLocation } from "react-router-dom";

import "./headphones.styles.scss";
import ProductSummary from "../../components/ProductsSummary/ProductSummary";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

const newProduct = {
	name: "ZX9 SPEAKER",
	new: false,
	description:
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
	buttonPeru: false,
};

export default function Headphones() {
	const currPage = "Headphones";
	return (
		<div className="headphones-container">
			<HeaderTitle currPage={currPage} />
		</div>
	);
}

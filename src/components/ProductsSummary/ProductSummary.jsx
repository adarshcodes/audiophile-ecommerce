import React from "react";

import "./productSummary.styles.scss";

import ButtonProductPeru from "../Buttons/ButtonProductPeru";
import ButtonProductOutline from "../Buttons/ButtonProductOutline";

export default function ProductSummary(newProduct) {
	return (
		<div className="product-copy">
			{newProduct.newProduct.new ? (
				<p className="new-product">New Product</p>
			) : null}
			<h1 className="product-title">{newProduct.newProduct.name}</h1>
			<p className="product-description">{newProduct.newProduct.description}</p>
			{newProduct.newProduct.buttonPeru ? (
				<ButtonProductPeru />
			) : (
				<ButtonProductOutline />
			)}
		</div>
	);
}

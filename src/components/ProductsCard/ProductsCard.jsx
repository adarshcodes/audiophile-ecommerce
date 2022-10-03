import React from "react";

import "./productsCard.styles.scss";

import ButtonShop from "../Buttons/ButtonShop";

import HeadphoneImg from "../../assets/images/shared/desktop/image-headphones.png";
import SpeakersImg from "../../assets/images/shared/desktop/image-speakers.png";
import EarphonesImg from "../../assets/images/shared/desktop/image-earphones.png";

const ProductCardList = [
	{
		id: 1,
		img: HeadphoneImg,
		title: "Headphones",
	},

	{
		id: 2,
		img: SpeakersImg,
		title: "Speakers",
	},

	{
		id: 3,
		img: EarphonesImg,
		title: "Earphones",
	},
];

export default function ProductsCard() {
	return (
		<div className="products-card">
			{ProductCardList.map((product) => {
				return (
					<div className="product-card" key={product.id}>
						<img
							src={product.img}
							alt="ProductImg"
							className="product-card-img"
						/>
						<h6 className="product-card-heading">{product.title}</h6>
						<ButtonShop />
					</div>
				);
			})}
		</div>
	);
}

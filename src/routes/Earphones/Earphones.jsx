import React from "react";

import "../Headphones/headphones.styles.scss";
import ProductSummary from "../../components/ProductsSummary/ProductSummary";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import BestAudio from "../../components/BestAudio/BestAudio";

import Earphones1 from "../../assets/images/category-earphones/desktop/image-yx1-earphones.jpg";
import Earphones1Tab from "../../assets/images/category-earphones/tablet/image-yx1-earphones.jpg";
import Earphones1Mob from "../../assets/images/category-earphones/mobile/image-yx1-earphones.jpg";

const newProduct = {
	product1: {
		name: "YX1 WIRELESS EARPHONES",
		new: true,
		description:
			"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
		buttonPeru: true,
		colorDark: true,
	},
};

export default function Earphones() {
	const currPage = "Earphones";

	return (
		<div className="earphones-container headphones-container">
			<HeaderTitle currPage={currPage} />
			<div className="headphones">
				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source
								media="(max-width: 650px)"
								srcSet={Earphones1Mob}
							></source>
							<source
								media="(max-width: 1000px)"
								srcSet={Earphones1Tab}
							></source>
							<img src={Earphones1} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product1} />
				</div>

				<ProductsCard />
				<BestAudio />
			</div>
		</div>
	);
}

import React from "react";

import "../Headphones/headphones.styles.scss";
import ProductSummary from "../../components/ProductsSummary/ProductSummary";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import BestAudio from "../../components/BestAudio/BestAudio";

import Speakers1 from "../../assets/images/category-speakers/desktop/image-zx9.jpg";
import Speakers1Tab from "../../assets/images/category-speakers/tablet/image-zx9.jpg";
import Speakers1Mob from "../../assets/images/category-speakers/mobile/image-zx9.jpg";
import Speakers2 from "../../assets/images/category-speakers/desktop/image-zx7.jpg";
import Speakers2Tab from "../../assets/images/category-speakers/tablet/image-zx7.jpg";
import Speakers2Mob from "../../assets/images/category-speakers/mobile/image-zx7.jpg";

const newProduct = {
	product1: {
		name: "ZX9 SPEAKER",
		new: true,
		description:
			"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
		buttonPeru: true,
		colorDark: true,
	},

	product2: {
		name: "ZX7 SPEAKER",
		new: true,
		description:
			"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
		buttonPeru: true,
		colorDark: true,
	},
};

export default function Speakers() {
	const currPage = "Speakers";

	return (
		<div className="speakers-container headphones-container">
			<HeaderTitle currPage={currPage} />
			<div className="headphones">
				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source media="(max-width: 650px)" srcSet={Speakers1Mob}></source>
							<source
								media="(max-width: 1000px)"
								srcSet={Speakers1Tab}
							></source>
							<img src={Speakers1} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product1} />
				</div>

				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source media="(max-width: 650px)" srcSet={Speakers2Mob}></source>
							<source
								media="(max-width: 1000px)"
								srcSet={Speakers2Tab}
							></source>
							<img src={Speakers2} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product2} />
				</div>

				<ProductsCard />
				<BestAudio />
			</div>
		</div>
	);
}

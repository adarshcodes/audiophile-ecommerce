import React from "react";
import { useLocation } from "react-router-dom";

import "./headphones.styles.scss";
import ProductSummary from "../../components/ProductsSummary/ProductSummary";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Headphone1 from "../../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import Headphone1Tab from "../../assets/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import Headphone1Mob from "../../assets/images/category-headphones/mobile/image-xx99-mark-two.jpg";
import Headphone2 from "../../assets/images/category-headphones/desktop/image-xx99-mark-one.jpg";
import Headphone2Tab from "../../assets/images/category-headphones/tablet/image-xx99-mark-one.jpg";
import Headphone2Mob from "../../assets/images/category-headphones/mobile/image-xx99-mark-one.jpg";
import Headphone3 from "../../assets/images/category-headphones/desktop/image-xx59.jpg";
import Headphone3Tab from "../../assets/images/category-headphones/tablet/image-xx59.jpg";
import Headphone3Mob from "../../assets/images/category-headphones/mobile/image-xx59.jpg";

const newProduct = {
	product1: {
		name: "XX99 Mark II Headphones",
		new: true,
		description:
			"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
		buttonPeru: true,
		colorDark: true,
	},

	product2: {
		name: "XX99 Mark Headphones",
		new: true,
		description:
			"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
		buttonPeru: true,
		colorDark: true,
	},

	product3: {
		name: "XX59 Headphones",
		new: true,
		description:
			"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
		buttonPeru: true,
		colorDark: true,
	},
};

export default function Headphones() {
	const currPage = "Headphones";
	return (
		<div className="headphones-container">
			<HeaderTitle currPage={currPage} />

			<div className="headphones">
				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source
								media="(max-width: 650px)"
								srcset={Headphone1Mob}
							></source>
							<source
								media="(max-width: 1000px)"
								srcset={Headphone1Tab}
							></source>
							<img src={Headphone1} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product1} />
				</div>

				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source
								media="(max-width: 650px)"
								srcset={Headphone2Mob}
							></source>
							<source
								media="(max-width: 1000px)"
								srcset={Headphone2Tab}
							></source>
							<img src={Headphone2} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product2} />
				</div>

				<div className="headphone">
					<div className="headphone-display">
						<picture>
							<source
								media="(max-width: 650px)"
								srcset={Headphone3Mob}
							></source>
							<source
								media="(max-width: 1000px)"
								srcset={Headphone3Tab}
							></source>
							<img src={Headphone3} alt="product-img" />
						</picture>
					</div>

					<ProductSummary newProduct={newProduct.product3} />
				</div>
			</div>
		</div>
	);
}

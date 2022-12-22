import React from "react";

import "./earphones.styles.scss";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

export default function Earphones() {
	const currPage = "Earphones";

	return (
		<div className="earphones-container">
			<HeaderTitle currPage={currPage} />
		</div>
	);
}

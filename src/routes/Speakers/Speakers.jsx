import React from "react";

import "./speakers.styles.scss";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

export default function Speakers() {
	const currPage = "Speakers";

	return (
		<div className="speakers-container">
			<HeaderTitle currPage={currPage} />
		</div>
	);
}

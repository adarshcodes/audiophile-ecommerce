import React from "react";

import "./headerTitle.styles.scss";

function HeaderTitle({ currPage }) {
	return (
		<div className="header-title">
			<h2 className="title">{currPage}</h2>
		</div>
	);
}

export default HeaderTitle;

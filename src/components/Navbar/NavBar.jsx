import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/shared/desktop/logo.svg";

import { ReactComponent as Cart } from "../../assets/images/shared/desktop/icon-cart.svg";

export default function NavBar() {
	return (
		<Fragment>
			<nav className="navbar">
				<Link to="/">
					<Logo className="navbar-logo" />
				</Link>

				<ul className="navbar-list">
					<li className="navbar-list__items">
						<Link to="/">Home</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/">Headphones</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/">Speakers</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/">Earphones</Link>
					</li>
				</ul>

				<Link to="/">
					<Cart className="navbar-cart" />
				</Link>
			</nav>

			<Outlet />
		</Fragment>
	);
}

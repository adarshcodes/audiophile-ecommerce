import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/shared/desktop/logo.svg";

import { ReactComponent as Cart } from "../../assets/images/shared/desktop/icon-cart.svg";

export default function NavBar() {
	const location = useLocation();

	const isActive = location.pathname === "/Home" || location.pathname === "/";

	return (
		<Fragment>
			<nav className={`navbar ${isActive ? " transparent" : null}`}>
				<Link to="/">
					<Logo className="navbar-logo" />
				</Link>

				<ul className="navbar-list">
					<li className="navbar-list__items">
						<Link to="/">Home</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/headphones">Headphones</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/speakers">Speakers</Link>
					</li>
					<li className="navbar-list__items">
						<Link to="/earphones">Earphones</Link>
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

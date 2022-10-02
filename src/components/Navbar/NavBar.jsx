import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/shared/desktop/logo.svg";

import { ReactComponent as Cart } from "../../assets/images/shared/desktop/icon-cart.svg";

export default function NavBar() {
	const location = useLocation();

	const isActiveHome =
		location.pathname === "/home" || location.pathname === "/";
	const isActiveHeadphones = location.pathname === "/headphones";
	const isActiveSpeakers = location.pathname === "/speakers";
	const isActiveEarphones = location.pathname === "/earphones";

	return (
		<Fragment>
			<nav className={`navbar ${isActiveHome ? " transparent" : null}`}>
				<Link to="/">
					<Logo className="navbar-logo" />
				</Link>

				<ul className="navbar-list">
					<li
						className={`navbar-list__items ${
							isActiveHome ? "active-link" : null
						}`}
					>
						<Link to="/">Home</Link>
					</li>

					<li
						className={`navbar-list__items ${
							isActiveHeadphones ? "active-link" : null
						}`}
					>
						<Link to="/headphones">Headphones</Link>
					</li>

					<li
						className={`navbar-list__items ${
							isActiveSpeakers ? "active-link" : null
						}`}
					>
						<Link to="/speakers">Speakers</Link>
					</li>

					<li
						className={`navbar-list__items ${
							isActiveEarphones ? "active-link" : null
						}`}
					>
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

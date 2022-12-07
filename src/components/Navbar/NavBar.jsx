import React, { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/shared/desktop/logo.svg";

import { ReactComponent as Cart } from "../../assets/images/shared/desktop/icon-cart.svg";

import { ReactComponent as Ham } from "../../assets/images/shared/tablet/icon-hamburger.svg";

export default function NavBar({ nav, setNav }) {
	const location = useLocation();

	const isActiveHome =
		location.pathname === "/home" || location.pathname === "/";
	const isActiveHeadphones = location.pathname === "/headphones";
	const isActiveSpeakers = location.pathname === "/speakers";
	const isActiveEarphones = location.pathname === "/earphones";
	console.log(nav);

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<Fragment>
			<div className="navigation">
				<nav className={`navbar ${isActiveHome ? " transparent" : null}`}>
					<div className="logo">
						<div className="ham" onClick={toggleNav}>
							<Ham />
						</div>

						<Link to="/">
							<Logo className="navbar-logo" />
						</Link>
					</div>

					<ul className="navbar-list navbar-desktop">
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
			</div>

			<Outlet />
		</Fragment>
	);
}

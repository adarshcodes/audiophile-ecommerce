import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./footer.styles.scss";

import { ReactComponent as Logo } from "../../assets/images/shared/desktop/logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../assets/images/shared/desktop/icon-instagram.svg";

function Footer() {
	const location = useLocation();

	const isActiveHome =
		location.pathname === "/home" || location.pathname === "/";
	const isActiveHeadphones = location.pathname === "/headphones";
	const isActiveSpeakers = location.pathname === "/speakers";
	const isActiveEarphones = location.pathname === "/earphones";

	return (
		<footer className="footer">
			<div className="footer-navigation">
				<Link to="/">
					<Logo className="logo" />
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
			</div>

			<div className="footer-copy">
				<div className="copy">
					<p>
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we’re open 7 days a week.
					</p>

					<p className="copyright">Copyright 2021. All Rights Reserved</p>
				</div>

				<ul className="socialicons">
					<li className="socialicons-list">
						<a
							href="https://www.instagram.com/officiallyadarsh/"
							target="_blank"
							rel="noreferrer"
						>
							<Facebook />
						</a>
					</li>
					<li className="socialicons-list">
						<a
							href="https://www.twitter.com/ideallyadarsh/"
							target="_blank"
							rel="noreferrer"
						>
							<Twitter />
						</a>
					</li>
					<li className="socialicons-list">
						<a
							href="https://www.instagram.com/officiallyadarsh/"
							target="_blank"
							rel="noreferrer"
						>
							<Instagram />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default React.memo(Footer);

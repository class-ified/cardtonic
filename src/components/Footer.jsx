/* eslint-disable jsx-a11y/anchor-is-valid */

import footerLogo from "../assets/images/logo-white.svg";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__content-top">
					<div className="text-box">
						<Link to="/">
							<img src={footerLogo} alt="logo" />
						</Link>

						<h3 className="text-small text-regular text-white">
							Cardtonic is a modern gift card exchange platform
							available on the web, iOS, and Android. On here, we
							take pride in customers’ satisfaction.
						</h3>
					</div>

					<span className="wide-line footer__content-top-span"></span>

					<div className="links-box">
						<div className="social-media">
							<h3 className="text-regular text-small text-white">
								<a href="#">IG</a>&nbsp;&nbsp;|&nbsp;&nbsp;
								<a href="#">FB</a>&nbsp;&nbsp;|&nbsp;&nbsp;
								<a href="#">TW</a>
							</h3>
						</div>
						<div className="page-links">
							<Link to="/rate-calculator">
								<h3 className="text-regular text-green text-small">
									Rate Calculator
								</h3>
							</Link>
							<Link to="/contact-us">
								<h3 className="text-regular text-green text-small">
									Contact Us
								</h3>
							</Link>
							<Link to="/terms">
								<h3 className="text-regular text-green text-small">
									Terms and Conditions
								</h3>
							</Link>
						</div>
					</div>
				</div>

				<span className="footer__content-midline wide-line"></span>

				<div className="footer__content-bottom">
					<h3 className="text-white text-small text-regular">
						©Copyright 2021. Cardtonic Technologies LTD. All Rights
						Reserved.
					</h3>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

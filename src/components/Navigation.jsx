import logoImage from "../assets/images/logo.svg";

import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<header className="navigation">
			<div className="navigation__content">
				<div className="navigation__content-logo">
					<Link to="/">
						<img src={logoImage} alt="logo" />
					</Link>
				</div>

				<div className="navigation__content-links">
					<Link to="/rate-calculator">
						<h3 className="text-small text-regular">
							Rate Calculator
						</h3>
					</Link>

					<Link to="/contact-us">
						<h3 className="text-small text-regular">Contact Us</h3>
					</Link>

					<Link to="/dashboard/signin">
						<h3 className="text-small text-regular">Sign In</h3>
					</Link>

					<Link to="/dashboard/register">
						<h3 className="text-small text-vbold button-yellow">
							Register
						</h3>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navigation;

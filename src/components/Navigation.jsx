import logoImage from "../assets/images/logo.svg";

import { RegisterButton } from "./Button";

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
					<Link to="/career">
						<h3 className="text-small text-regular text-black">
							Career
						</h3>
					</Link>

					<Link to="/rate-calculator">
						<h3 className="text-small text-regular text-black">
							Rate Calculator
						</h3>
					</Link>

					<Link to="/contact-us">
						<h3 className="text-small text-regular text-black">Contact Us</h3>
					</Link>

					<Link to="/dashboard/signin">
						<h3 className="text-small text-regular text-black">Sign In</h3>
					</Link>

					<RegisterButton buttonColor='button-yellow' text='Register' />
				</div>
			</div>
		</header>
	);
};

export default Navigation;

import logoImage from "../assets/images/logo.svg";

import { RegisterButton } from "./Button";

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Navigation = () => {

	const navigationButtonRef = useRef()
	const navigationBox = useRef()
	const navigationList = useRef()

	const handleMobileNavigation = () => {
		navigationButtonRef.current.classList?.toggle('navigation__content-button-open')
		navigationBox.current.classList?.toggle('navigation__content-buttonbox-open')
		document.body?.classList.toggle('nav-open')
		document.html?.classList.toggle('nav-open')
		navigationList.current.classList.toggle('mobile-navigation-list-open')
		console.log(true)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])


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

				<div className="navigation__content-buttonbox" ref={navigationBox}>
					<button className="navigation__content-button" ref={navigationButtonRef} onClick={handleMobileNavigation}>
						<span className="line"></span>
					</button>

					<div className="background"></div>

					
				</div>

				<div className="mobile-navigation-list" ref={navigationList}>
					<Link to="/rate-calculator" onClick={handleMobileNavigation}>
						<h3 className="text-20 text-white text-regular">Rate Calculator</h3>
					</Link>

					<Link to="/contact-us" onClick={handleMobileNavigation}>
						<h3 className="text-20 text-white text-regular">Contact Us</h3>
					</Link>

					<Link to="/dashboard/signin" onClick={handleMobileNavigation}>
						<h3 className="text-20 text-white text-regular">Sign In</h3>
					</Link>

					<Link to="/career" onClick={handleMobileNavigation}>
						<h3 className="text-20 text-white text-regular">Career</h3>
					</Link>

					<Link to="/dashboard/register" onClick={handleMobileNavigation}>
						<h3 className="text-20 text-white text-regular">Register</h3>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navigation;

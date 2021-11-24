import logoImage from "../assets/images/logo.svg";

import { RegisterButton } from "./Button";
import { DesktopNavigationLink } from "./Links";

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";



const Navigation = () => {
	const navigationButtonRef = useRef()
	const navigationBox = useRef()
	const navigationList = useRef()
	const desktopNavigationLinksContainer = useRef()

	const handleMobileNavigation = () => {
		navigationButtonRef.current.classList?.toggle('navigation__content-button-open')
		navigationBox.current.classList?.toggle('navigation__content-buttonbox-open')
		document.body?.classList.toggle('nav-open')
		document.html?.classList.toggle('nav-open')
		navigationList.current.classList.toggle('mobile-navigation-list-open')
	}

	const handleDesktopNavigation = () => {
		const desktopNavigationLinks = desktopNavigationLinksContainer.current?.childNodes
		
		console.log(desktopNavigationLinks)
		desktopNavigationLinks.forEach(link => {
			link.addEventListener('click', e => {
				console.log(e.target)
			})
		})
	}
	

	useEffect(() => {
		handleDesktopNavigation()
	}, [])


	return (
		<header className="navigation">
			<div className="navigation__content">
				<div className="navigation__content-logo">
					<Link to="/">
						<img src={logoImage} alt="logo" />
					</Link>
				</div>

				<div className="navigation__content-links" ref={desktopNavigationLinksContainer}>
					<Link to="/career">
						<DesktopNavigationLink data-link="career" text="Career" />
					</Link>

					<Link to="/rate-calculator">
						<DesktopNavigationLink text="Rate Calculator" />
					</Link>

					<Link to="/contact-us">
						<DesktopNavigationLink text="Contact Us" />
					</Link>

					<Link to="/dashboard/signin">
						<DesktopNavigationLink text="Sign In" />
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

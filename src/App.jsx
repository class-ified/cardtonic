
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import GetStartedNow from "./components/GetStartedNow";

import Home from "./pages/Home"
import RateCalculator from "./pages/RateCalculator";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/dashboard/SignIn"
import Register from "./pages/dashboard/Register"
import Career from "./pages/Career";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Terms from "./pages/Terms";

// import { Swiper, SwiperSlide } from "swiper/react";

function App() {
	return (
		<div className="app">
			<Router> 
				<Navigation/>

				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>

					<Route exact path="/career">
						<Career/>
					</Route>

					<Route exact path="/rate-calculator">
						<RateCalculator/>
					</Route>

					<Route exact path="/contact-us">
						<ContactUs/>
					</Route>

					<Route exact path="/terms">
						<Terms/>
					</Route>

					<Route exact path="/dashboard/signin">
						<SignIn/>
					</Route>

					<Route exact path="/dashboard/register">
						<Register/>
					</Route>
				</Switch>

				<GetStartedNow />

				<Footer />
			</Router>
		</div>
	);
}

export default App;

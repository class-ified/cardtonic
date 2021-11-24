
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import GetStartedNow from "./components/GetStartedNow";

import Home from "./pages/Home"
import RateCalculator from "./pages/RateCalculator";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Terms from "./pages/Terms";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";

const GetStartedRoutes = () => {
	return (
		<>
			<Switch>
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
			</Switch>

			<GetStartedNow />
		</>
	)
}


const App = () => {
	return (
		<div className="app">
			<Router>
				<Navigation/>

				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>

					<Route component={GetStartedRoutes}/>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;

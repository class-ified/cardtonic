
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import RateCalculator from "./pages/RateCalculator";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/dashboard/SignIn"
import Register from "./pages/dashboard/Register"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router> 
				<Navigation/>

				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>

					<Route exact path="/rate-calculator">
						<RateCalculator/>
					</Route>

					<Route exact path="/contact-us">
						<ContactUs/>
					</Route>

					<Route exact path="/dashboard/signin">
						<SignIn/>
					</Route>

					<Route exact path="/dashboard/register">
						<Register/>
					</Route>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;

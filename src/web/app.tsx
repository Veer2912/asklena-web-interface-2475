import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Features from "./pages/features";
import Solutions from "./pages/solutions";
import Pricing from "./pages/pricing";
import Login from "./pages/login";
import { Provider } from "./components/provider";

function App() {
	return (
		<Provider>
			<Switch>
				<Route path="/" component={Index} />
				<Route path="/features" component={Features} />
				<Route path="/solutions" component={Solutions} />
				<Route path="/pricing" component={Pricing} />
				<Route path="/login" component={Login} />
			</Switch>
		</Provider>
	);
}

export default App;

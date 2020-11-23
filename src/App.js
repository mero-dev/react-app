import './assets/css/app.css';
import Home from "./components/Home";
import Wetter from "./components/Wetter";
import Default from "./components/Default";
import SlideShow from "./components/SlideShow";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

function App() {
	const person = {
		firstname: "Pippi",
		lastname: "Langsocke",
	};
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/slide">SlideShow</Link></li>
						<li><Link to="/wetter">Wetter</Link></li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home text="Das ist mein Text" autor={person} />
					</Route>
					<Route path="/wetter">
						<Wetter/>
					</Route>
					<Route path="/slide">
						<SlideShow/>
					</Route>
					<Route path="/default">
						<Default message="Diese Route existiert nicht" />
					</Route>
					<Redirect to="/default" />
				</Switch>
			</div>
		</Router>
	);
}
export default App;

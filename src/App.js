import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/">
						<Redirect to="/posts" />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;

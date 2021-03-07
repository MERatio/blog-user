import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Bus from './utils/Bus';
import Navbar from './components/Navbar';
import Flashes from './components/Flashes';
import Posts from './components/Posts';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
	useEffect(() => {
		window.flashes = (flashes) => Bus.emit('flashes', flashes);
	}, []);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Flashes />
					</div>
				</div>
			</div>
			<main>
				<Switch>
					<Route exact path="/">
						<Redirect to="/posts" />
					</Route>
					<Route path="/posts">
						<div className="container">
							<Posts />
						</div>
					</Route>
					<Route exact path="/sign-up">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<SignUpForm />
								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;

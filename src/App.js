import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { getData } from './lib/helpers';
import Bus from './utils/Bus';
import BootstrapSpinner from './components/BootstrapSpinner';
import Navbar from './components/Navbar';
import Flashes from './components/Flashes';
import Posts from './components/Posts';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import './App.css';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		window.flashes = (flashes) => Bus.emit('flashes', flashes);
	}, []);

	useEffect(() => {
		async function getCurrentUser() {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/users/current-user`
			);
			setUser(data.user);
		}
		getCurrentUser();
		const intervalId = setInterval(getCurrentUser, 30000);
		return () => clearInterval(intervalId);
	}, []);

	return user === null ? (
		<BootstrapSpinner type={'grow'} size={'3em'} />
	) : (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar user={user} />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Flashes />
					</div>
				</div>
			</div>
			<main className="h-100">
				<Switch>
					<Route exact path="/">
						<Redirect to="/posts" />
					</Route>
					<Route path="/posts">
						<div className="h-100 container">
							<div className="h-100 row justify-content-center">
								<div className="col-md-8 position-relative">
									<Posts />
								</div>
							</div>
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
					<Route exact path="/sign-in">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<SignInForm setUser={setUser} />
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

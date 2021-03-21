import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { getData } from './lib/helpers';
import Bus from './utils/Bus';
import BootstrapSpinner from './components/BootstrapSpinner';
import Navbar from './components/Navbar';
import Flashes from './components/Flashes';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import './App.css';

function App() {
	const history = useHistory();

	const [user, setUser] = useState(null);

	function signOut() {
		localStorage.removeItem('jwt');
		setUser(false);
		window.flashes([
			{ msg: 'You have successfully signed out', type: 'success' },
		]);
		history.push('/');
	}

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
		<>
			<Navbar user={user} signOut={signOut} />
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
					<Route exact path="/posts">
						<PostsPage />
					</Route>
					<Route exact path="/posts/:postId">
						<PostPage user={user} />
					</Route>
					<Route exact path="/sign-up">
						<SignUpPage />
					</Route>
					<Route exact path="/sign-in">
						<SignInPage setUser={setUser} />
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;

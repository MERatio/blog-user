import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
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
	const [flashes, setFlashes] = useState([]);

	function signOut() {
		localStorage.removeItem('jwt');
		setUser(false);
		window.flashes([
			{ msg: 'You have successfully signed out', type: 'success' },
		]);
		history.push('/');
	}

	function handleFlashDelete(flashId) {
		const newFlashes = flashes.filter((flash) => flash.id !== flashId);
		setFlashes(newFlashes);
	}

	useEffect(() => {
		Bus.addListener('flashes', (flashes) => {
			const flashesWithId = flashes.map((flash) => ({
				...flash,
				id: nanoid(),
			}));
			setFlashes(flashesWithId);
		});
	}, []);

	useEffect(() => {
		window.flashes = (flashes) => Bus.emit('flashes', flashes);
	}, []);

	useEffect(() => {
		if (flashes.length > 0) {
			const timeoutId = setTimeout(() => setFlashes([]), 4000);
			return () => clearTimeout(timeoutId);
		}
	}, [flashes]);

	useEffect(() => {
		async function fetchAndSetUser() {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/users/current-user`
			);
			setUser(data.user);
		}
		fetchAndSetUser();
		const intervalId = setInterval(fetchAndSetUser, 30000);
		return () => clearInterval(intervalId);
	}, []);

	return user === null ? (
		<BootstrapSpinner type={'grow'} size={'3em'} />
	) : (
		<>
			<Navbar user={user} signOut={signOut} />
			{flashes.length > 0 && (
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<Flashes flashes={flashes} onFlashDelete={handleFlashDelete} />
						</div>
					</div>
				</div>
			)}
			<main>
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
						{user ? <Redirect to="/" /> : <SignUpPage />}
					</Route>
					<Route exact path="/sign-in">
						{user ? <Redirect to="/" /> : <SignInPage setUser={setUser} />}
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;

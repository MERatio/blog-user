import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	const [posts, setPosts] = useState([]);

	async function fetchAndSetPosts() {
		const response = await fetch('https://blog-api-97575.herokuapp.com/posts');
		const data = await response.json();
		setPosts(data.posts);
	}

	useEffect(() => {
		fetchAndSetPosts();
	}, []);

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

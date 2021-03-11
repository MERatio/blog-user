import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';
import Post from './Post';

function Posts() {
	const [postsWithComments, setPostsWithComments] = useState([]);

	const { path } = useRouteMatch();

	useEffect(() => {
		async function fetchAndSetPostsWithComments() {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
			const data = await response.json();
			const posts = data.posts;

			const newPostsWithComments = await Promise.all(
				posts.map(async (post) => {
					const response = await fetch(
						`${process.env.REACT_APP_API_URL}/posts/${post._id}/comments`
					);
					const data = await response.json();
					return { ...post, comments: data.comments };
				})
			);
			setPostsWithComments(newPostsWithComments);
		}

		fetchAndSetPostsWithComments();
	}, []);

	return postsWithComments.length < 1 ? (
		<BootstrapSpinner type={'border'} size={'2em'} />
	) : (
		<Switch>
			<Route exact path={path}>
				<Cards items={postsWithComments} />
			</Route>
			<Route exact path={`${path}/:postId`}>
				<Post posts={postsWithComments} />
			</Route>
		</Switch>
	);
}

export default Posts;

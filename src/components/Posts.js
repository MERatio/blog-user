import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';
import Post from './Post';

function Posts() {
	const [postsWithCommentsCount, setPostsWithCommentsCount] = useState([]);

	const { path } = useRouteMatch();

	useEffect(() => {
		async function fetchAndSetPostsWithCommentsCount() {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
			const data = await response.json();
			const posts = data.posts;

			const newPostsWithCommentsCount = await Promise.all(
				posts.map(async (post) => {
					const response = await fetch(
						`${process.env.REACT_APP_API_URL}/posts/${post._id}/comments`
					);
					const data = await response.json();
					return { ...post, commentsCount: data.comments.length };
				})
			);
			setPostsWithCommentsCount(newPostsWithCommentsCount);
		}

		fetchAndSetPostsWithCommentsCount();
	}, []);

	return postsWithCommentsCount.length < 1 ? (
		<BootstrapSpinner type={'border'} size={'2em'} />
	) : (
		<Switch>
			<Route exact path={path}>
				<Cards items={postsWithCommentsCount} />
			</Route>
			<Route exact path={`${path}/:postId`}>
				<Post posts={postsWithCommentsCount} />
			</Route>
		</Switch>
	);
}

export default Posts;

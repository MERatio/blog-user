import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Cards from './Cards';

function Posts() {
	const [postsWithCommentsCount, setPostsWithCommentsCount] = useState([]);

	const { path } = useRouteMatch();

	useEffect(() => {
		async function fetchAndSetPostsComments() {
			const response = await fetch(
				'https://blog-api-97575.herokuapp.com/posts'
			);
			const data = await response.json();
			const posts = data.posts;

			const newPostsWithCommentsCount = await Promise.all(
				posts.map(async (post) => {
					const response = await fetch(
						`https://blog-api-97575.herokuapp.com/posts/${post._id}/comments`
					);
					const data = await response.json();
					return { ...post, commentsCount: data.comments.length };
				})
			);
			setPostsWithCommentsCount(newPostsWithCommentsCount);
		}

		fetchAndSetPostsComments();
	}, []);

	return (
		<Switch>
			<Route exact path={path}>
				<Cards items={postsWithCommentsCount} />
			</Route>
		</Switch>
	);
}

export default Posts;

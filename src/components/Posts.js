import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Cards from './Cards';

function Posts({ posts }) {
	const [postsWithCommentsCount, setPostsWithCommentsCount] = useState([]);

	const { path } = useRouteMatch();

	useEffect(() => {
		async function fetchAndSetPostsComments(posts) {
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
		fetchAndSetPostsComments(posts);
	}, [posts]);

	return (
		<Switch>
			<Route exact path={path}>
				<Cards items={postsWithCommentsCount} />
			</Route>
		</Switch>
	);
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default Posts;

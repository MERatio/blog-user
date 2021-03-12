import { useState, useEffect } from 'react';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';

function Posts() {
	const [postsWithComments, setPostsWithComments] = useState([]);

	useEffect(() => {
		async function fetchAndSetPostsWithComments() {
			try {
				const data = await getData(`${process.env.REACT_APP_API_URL}/posts`);
				const posts = data.posts;
				if (data.err) {
					handleExpressErr(data.err);
					return;
				}

				const newPostsWithComments = await Promise.all(
					posts.map(async (post) => {
						const data = await getData(
							`${process.env.REACT_APP_API_URL}/posts/${post._id}/comments`
						);
						if (data.err) {
							handleExpressErr(data.err);
							return;
						}
						return { ...post, comments: data.comments };
					})
				);
				setPostsWithComments(newPostsWithComments);
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		fetchAndSetPostsWithComments();
	}, []);

	return postsWithComments.length < 1 ? (
		<BootstrapSpinner type={'border'} size={'2em'} />
	) : (
		<Cards items={postsWithComments} />
	);
}

export default Posts;

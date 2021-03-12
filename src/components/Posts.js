import { useState, useEffect } from 'react';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';

function Posts() {
	const [postsWithComments, setPostsWithComments] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const data = await getData(`${process.env.REACT_APP_API_URL}/posts`);
				if (data.err) {
					handleExpressErr(data.err);
				} else {
					return data.posts;
				}
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		async function fetchAndAttachPostsToComments(posts) {
			try {
				const postsWithComments = await Promise.all(
					posts.map(async (post) => {
						try {
							const data = await getData(
								`${process.env.REACT_APP_API_URL}/posts/${post._id}/comments`
							);
							if (data.err) {
								handleExpressErr(data.err);
							} else {
								return { ...post, comments: data.comments };
							}
						} catch (err) {
							window.flashes([
								{ msg: 'Something went wrong, please try again later.' },
							]);
						}
					})
				);
				return postsWithComments;
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		async function fetchAndSetPostsWithComments() {
			const posts = await fetchPosts();
			const newPostsWithComments = await fetchAndAttachPostsToComments(posts);
			setPostsWithComments(newPostsWithComments);
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

import { useState, useEffect } from 'react';
import useIsMounted from '../lib/useIsMounted';
import useIsLoading from '../lib/useIsLoading';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';

function Posts() {
	const isMounted = useIsMounted();

	const [getPosts, isGettingPosts] = useIsLoading(fetchAndSetPostsWithComments);

	const [postsWithComments, setPostsWithComments] = useState([]);

	async function fetchAndSetPostsWithComments(isMounted) {
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

		if (isMounted) {
			const posts = await fetchPosts();
			const newPostsWithComments = await fetchAndAttachPostsToComments(posts);
			setPostsWithComments(newPostsWithComments);
		}
	}

	useEffect(() => {
		getPosts(isMounted);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isGettingPosts ? (
		<BootstrapSpinner type={'border'} size={'2em'} />
	) : (
		<Cards items={postsWithComments} />
	);
}

export default Posts;

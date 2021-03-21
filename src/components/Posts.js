import { useState, useEffect } from 'react';
import useIsMounted from '../lib/useIsMounted';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Cards from './Cards';

function Posts() {
	const isMounted = useIsMounted();

	const [
		isFetchingPostsWithComments,
		setIsFetchingPostsWithComments,
	] = useState(false);
	const [postsWithComments, setPostsWithComments] = useState([]);

	async function fetchAndSetPostsWithComments() {
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
			setIsFetchingPostsWithComments(true);
			const posts = await fetchPosts();
			const newPostsWithComments = await fetchAndAttachPostsToComments(posts);
			setIsFetchingPostsWithComments(false);
			setPostsWithComments(newPostsWithComments);
		}
	}

	useEffect(() => {
		fetchAndSetPostsWithComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isFetchingPostsWithComments ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : (
		<Cards items={postsWithComments} />
	);
}

export default Posts;

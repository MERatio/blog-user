import { useState, useEffect } from 'react';
import useIsMounted from '../lib/useIsMounted';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostsCards from './PostsCards';

function Posts() {
	const isMounted = useIsMounted();

	const [isFetchingPosts, setIsFetchingPosts] = useState(false);
	const [posts, setPosts] = useState([]);

	async function fetchAndSetPosts() {
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

		setIsFetchingPosts(true);
		const posts = await fetchPosts();
		setIsFetchingPosts(false);
		setPosts(posts);
	}

	useEffect(() => {
		isMounted && fetchAndSetPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isFetchingPosts ? (
		<div className="position-relative" style={{ minHeight: '30em' }}>
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : (
		<PostsCards posts={posts} />
	);
}

export default Posts;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from './PostCard';
import PostCommentForm from './PostCommentForm';
import PostComments from './PostComments';

function Post({ user }) {
	const { postId } = useParams();
	const history = useHistory();

	const isMounted = useIsMounted();

	const [isFetchingPostWithComments, setIsFetchingPostsWithComments] = useState(
		false
	);
	const [postWithComments, setPostWithComments] = useState({});

	async function fetchPostComments(postId) {
		try {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
			);
			if (data.err) {
				handleExpressErr(data.err);
			} else {
				return data.comments;
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	async function fetchAndSetPostWithComments() {
		async function fetchPost(postId) {
			try {
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}`
				);
				if (data.err) {
					if ([401, 404].includes(data.err.status)) {
						history.push('/');
					}
					handleExpressErr(data.err);
				} else {
					return data.post;
				}
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		if (isMounted) {
			setIsFetchingPostsWithComments(true);
			const post = await fetchPost(postId);
			const postComments = await fetchPostComments(postId);
			setIsFetchingPostsWithComments(false);
			setPostWithComments({ ...post, comments: postComments });
		}
	}

	async function updatePostComments(postId) {
		if (isMounted) {
			const postComments = await fetchPostComments(postId);
			setPostWithComments({ ...postWithComments, comments: postComments });
		}
	}

	useEffect(() => {
		fetchAndSetPostWithComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted, postId]);

	return isFetchingPostWithComments ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : postWithComments._id ? (
		<section className="mb-4">
			<PostCard post={postWithComments} />
			{user && postWithComments.published && (
				<PostCommentForm
					postId={postId}
					updatePostComments={updatePostComments}
				/>
			)}
			<PostComments postComments={postWithComments.comments} />
		</section>
	) : null;
}

Post.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default Post;

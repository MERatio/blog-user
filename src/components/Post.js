import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Card from './Card';
import PostCommentForm from './PostCommentForm';
import PostComments from './PostComments';

function Post({ user }) {
	const isMounted = useIsMounted();

	const { postId } = useParams();

	const history = useHistory();

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

	async function updatePostComments(postId) {
		if (isMounted) {
			const postComments = await fetchPostComments(postId);
			setPostWithComments({ ...postWithComments, comments: postComments });
		}
	}

	useEffect(() => {
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

		async function fetchAndSetPostWithComments(postId) {
			if (isMounted) {
				const post = await fetchPost(postId);
				const postComments = await fetchPostComments(postId);
				setPostWithComments({ ...post, comments: postComments });
			}
		}

		fetchAndSetPostWithComments(postId);
	}, [isMounted, postId, history]);

	return postWithComments._id ? (
		<section className="mb-4">
			<Card item={postWithComments} />
			{user && postWithComments.published && (
				<PostCommentForm
					postId={postId}
					updatePostComments={updatePostComments}
				/>
			)}
			<PostComments postComments={postWithComments.comments} />
		</section>
	) : (
		<BootstrapSpinner type={'border'} size={'2em'} />
	);
}

Post.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default Post;

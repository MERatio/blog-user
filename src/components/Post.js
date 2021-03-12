import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Card from './Card';
import PostCommentForm from './PostCommentForm';
import PostComments from './PostComments';

function Post() {
	const { postId } = useParams();

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
		const postComments = await fetchPostComments(postId);
		setPostWithComments({ ...postWithComments, comments: postComments });
	}

	useEffect(() => {
		async function fetchPost(postId) {
			try {
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}`
				);
				if (data.err) {
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
			const post = await fetchPost(postId);
			const postComments = await fetchPostComments(postId);
			setPostWithComments({ ...post, comments: postComments });
		}

		fetchAndSetPostWithComments(postId);
	}, [postId]);

	return postWithComments._id ? (
		<section className="mb-4">
			<Card item={postWithComments} />
			<PostCommentForm
				postId={postId}
				updatePostComments={updatePostComments}
			/>
			<PostComments postComments={postWithComments.comments} />
		</section>
	) : (
		<BootstrapSpinner type={'border'} size={'2em'} />
	);
}

export default Post;

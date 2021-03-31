import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import useIsMounted from '../lib/useIsMounted';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from '../components/PostCard';
import PostCommentForm from '../components/PostCommentForm';
import PostComments from '../components/PostComments';

function PostPage({ user }) {
	const { postId } = useParams();
	const history = useHistory();

	const isMounted = useIsMounted();

	const [isFetchingPost, setIsFetchingPost] = useState(false);
	const [post, setPost] = useState({
		comments: [],
	});
	const [isFetchingPostComments, setIsFetchingPostComments] = useState(false);

	async function fetchPostComments(postId) {
		try {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
			);
			if (data.err) {
				if ([401, 404].includes(data.err.status)) {
					history.push('/');
				}
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
			setIsFetchingPostComments(true);
			const postComments = await fetchPostComments(postId);
			setIsFetchingPostComments(false);
			setPost((prevPost) => ({ ...prevPost, comments: postComments }));
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

		async function fetchAndSetPost(postId) {
			setIsFetchingPost(true);
			setIsFetchingPostComments(true);
			const post = await fetchPost(postId);
			setIsFetchingPost(false);
			setIsFetchingPostComments(false);
			setPost(post);
		}

		isMounted && fetchAndSetPost(postId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted, postId]);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<section>
						{isFetchingPost ? (
							<div
								className="bootstrap-spinner-container"
								style={{ minHeight: '30em' }}
							>
								<BootstrapSpinner type={'border'} size={'2em'} />
							</div>
						) : (
							post._id && (
								<>
									<PostCard post={post} />
									{user && post.published && (
										<PostCommentForm
											postId={postId}
											updatePostComments={updatePostComments}
										/>
									)}
								</>
							)
						)}
						{isFetchingPostComments ? (
							<div className="position-relative" style={{ minHeight: '10em' }}>
								<BootstrapSpinner type={'border'} size={'2em'} />
							</div>
						) : (
							<PostComments postComments={post.comments} />
						)}
					</section>
				</div>
			</div>
		</div>
	);
}

PostPage.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default PostPage;

import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Card from './Card';
import PostCommentForm from './PostCommentForm';
import PostComments from './PostComments';

function Post({ posts, fetchAndSetPostsWithComments }) {
	const { postId } = useParams();
	const post = posts.find((post) => post._id === postId);

	return post ? (
		<section className="mb-4">
			<Card item={post} />
			<PostCommentForm
				postId={postId}
				fetchAndSetPostsWithComments={fetchAndSetPostsWithComments}
			/>
			<PostComments postComments={post.comments} />
		</section>
	) : null;
}

Post.propTypes = {
	posts: PropTypes.array.isRequired,
	fetchAndSetPostsWithComments: PropTypes.func.isRequired,
};

export default Post;

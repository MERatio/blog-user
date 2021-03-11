import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Card from './Card';
import PostComments from './PostComments';

function Post({ posts }) {
	const { postId } = useParams();
	const post = posts.find((post) => post._id === postId);

	return post ? (
		<section className="mb-4">
			<Card item={post} />
			<PostComments postComments={post.comments} />
		</section>
	) : null;
}

Post.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default Post;

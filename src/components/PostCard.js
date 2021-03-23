import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import pluralize from 'pluralize';

function PostCard({ post, postCommentsLength }) {
	return (
		<div className="card mb-2">
			<div className="card-header">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-subtitle mb-2">
					{post.author.firstName + ' ' + post.author.lastName}
				</p>
				<p className="card-subtitle">
					{format(new Date(post.createdAt), 'PPpp')}
				</p>
			</div>
			<div className="card-body">
				<p className="card-text">{post.body}</p>
				<Link to={`/posts/${post._id}`} className="card-link">
					{pluralize(
						'comments',
						post.comments ? post.comments.length : postCommentsLength,
						true
					)}
				</Link>
			</div>
		</div>
	);
}

PostCard.propTypes = {
	post: PropTypes.object.isRequired,
	postCommentsLength: PropTypes.number,
};

export default PostCard;

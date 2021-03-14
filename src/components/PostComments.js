import PropTypes from 'prop-types';
import format from 'date-fns/format';

function PostComments({ postComments }) {
	return postComments.length > 0 ? (
		<ul className="list-group">
			{postComments.map((postComment) => (
				<li key={postComment._id} className="list-group-item">
					<p className="h6 mb-1">
						{postComment.author.firstName + ' ' + postComment.author.lastName}
					</p>
					<p className="text-muted mb-2">
						{format(new Date(postComment.createdAt), 'PPpp')}
					</p>
					<p className="mb-2">{postComment.body}</p>
				</li>
			))}
		</ul>
	) : null;
}

PostComments.propTypes = {
	postComments: PropTypes.array.isRequired,
};

export default PostComments;

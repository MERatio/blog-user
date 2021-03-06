import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function PostComments({ postId }) {
	const [postComments, setPostComments] = useState([]);

	useEffect(() => {
		async function fetchAndSetPostComments(postId) {
			const response = await fetch(
				`https://blog-api-97575.herokuapp.com/posts/${postId}/comments`
			);
			const data = await response.json();
			setPostComments(data.comments);
		}

		fetchAndSetPostComments(postId);
	}, [postId]);

	return (
		<ul className="list-group">
			{postComments.map((postComment) => (
				<li key={postComment._id} className="list-group-item">
					<p className="h6 mb-2">
						{postComment.author.firstName + ' ' + postComment.author.lastName}
					</p>
					<p className="mb-2">{postComment.body}</p>
				</li>
			))}
		</ul>
	);
}

PostComments.propTypes = {
	postId: PropTypes.string.isRequired,
};

export default PostComments;

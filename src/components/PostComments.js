import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import BootstrapSpinner from '../components/BootstrapSpinner';

function PostComments({ postId }) {
	const [postComments, setPostComments] = useState([]);

	useEffect(() => {
		async function fetchAndSetPostComments(postId) {
			const response = await fetch(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
			);
			const data = await response.json();
			setPostComments(data.comments);
		}

		fetchAndSetPostComments(postId);
	}, [postId]);

	return postComments.length < 1 ? (
		<BootstrapSpinner type={'border'} size={'2em'} />
	) : (
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
	);
}

PostComments.propTypes = {
	postId: PropTypes.string.isRequired,
};

export default PostComments;

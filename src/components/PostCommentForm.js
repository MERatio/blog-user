import { useState } from 'react';
import PropTypes from 'prop-types';
import { postData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function PostCommentForm({ postId, fetchAndSetPostsWithComments }) {
	const [state, setState] = useState({
		body: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	function handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setState((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(e) {
		try {
			e.preventDefault();
			setIsSubmitting(true);
			const data = await postData(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`,
				state
			);
			setIsSubmitting(false);
			window.flashes([
				{ msg: 'Comment successfully created', type: 'success' },
			]);
			setState((prevState) => ({ ...prevState, body: '' }));
			fetchAndSetPostsWithComments();
			if (data.err) {
				handleExpressErr(data.err);
			} else if (data.errors) {
				setState((prevState) => ({
					...prevState,
					body: data.comment.body,
				}));
				window.flashes(data.errors);
			}
		} catch (err) {
			setIsSubmitting(false);
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="body">Write a comment</label>
				<textarea
					className="form-control"
					id="body"
					name="body"
					value={state.body}
					onChange={handleInputChange}
					required
					maxLength={200}
				/>
			</div>
			<SubmitBtn text={'Comment'} isSubmitting={isSubmitting} />
		</form>
	);
}

PostCommentForm.propTypes = {
	postId: PropTypes.string.isRequired,
	fetchAndSetPostsWithComments: PropTypes.func.isRequired,
};

export default PostCommentForm;

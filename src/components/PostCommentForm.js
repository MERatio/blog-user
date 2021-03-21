import { useState } from 'react';
import PropTypes from 'prop-types';
import useIsMounted from '../lib/useIsMounted';
import { postData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function PostCommentForm({ postId, updatePostComments }) {
	const isMounted = useIsMounted();

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
			if (isMounted) {
				setState((prevState) => ({ ...prevState, body: '' }));
				updatePostComments(postId);
			}
			window.flashes([
				{ msg: 'Comment successfully created', type: 'success' },
			]);
			if (data.err) {
				handleExpressErr(data.err);
			} else if (data.errors) {
				isMounted &&
					setState((prevState) => ({
						...prevState,
						body: data.comment.body,
					}));
				window.flashes(data.errors);
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mb-2">
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
	updatePostComments: PropTypes.func.isRequired,
};

export default PostCommentForm;

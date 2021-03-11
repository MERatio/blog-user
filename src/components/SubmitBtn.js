import PropTypes from 'prop-types';

function SubmitBtn({ text, isSubmitting }) {
	return isSubmitting ? (
		<button type="submit" className="btn btn-primary w-100" disabled>
			<span
				className="spinner-border spinner-border-sm"
				role="status"
				aria-hidden="true"
			></span>
			Submitting...
		</button>
	) : (
		<button type="submit" className="btn btn-primary w-100">
			{text}
		</button>
	);
}

SubmitBtn.defaultProps = {
	text: 'Submit',
};

SubmitBtn.propTypes = {
	text: PropTypes.string.isRequired,
	isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitBtn;

import PropTypes from 'prop-types';

function SubmitBtn({ isSubmitting }) {
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
			Submit
		</button>
	);
}

SubmitBtn.propTypes = {
	isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitBtn;

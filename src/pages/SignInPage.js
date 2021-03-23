import PropTypes from 'prop-types';
import SignInForm from '../components/SignInForm';

function SignInPage({ setUser }) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<section>
						<SignInForm setUser={setUser} />
					</section>
				</div>
			</div>
		</div>
	);
}

SignInPage.propTypes = {
	setUser: PropTypes.func.isRequired,
};

export default SignInPage;

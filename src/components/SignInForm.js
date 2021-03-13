import { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { postData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function SignInForm({ setUser }) {
	const isMounted = useIsMounted();
	const history = useHistory();
	const [state, setState] = useState({
		username: '',
		password: '',
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
			isMounted && setIsSubmitting(true);
			const data = await postData(
				`${process.env.REACT_APP_API_URL}/auth/sign-in`,
				state
			);
			isMounted && setIsSubmitting(false);
			if (data.err) {
				isMounted && setState((prevState) => ({ ...prevState, password: '' }));
				handleExpressErr(data.err);
			} else {
				localStorage.setItem('jwt', data.token);
				setUser(data.user);
				window.flashes([
					{ msg: 'You have successfuly signed in', type: 'success' },
				]);
				history.push('/');
			}
		} catch (err) {
			isMounted && setIsSubmitting(false);
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					className="form-control"
					id="username"
					placeholder="johnDoe01"
					name="username"
					value={state.username}
					required
					maxLength="20"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					name="password"
					value={state.password}
					required
					minLength="8"
					onChange={handleInputChange}
				/>
			</div>
			<SubmitBtn isSubmitting={isSubmitting} />
		</form>
	);
}

SignInForm.propTypes = {
	setUser: PropTypes.func.isRequired,
};

export default SignInForm;

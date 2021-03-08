import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function SignInForm() {
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
		e.preventDefault();
		setIsSubmitting(true);
		const data = await postData(
			'https://blog-api-97575.herokuapp.com/auth',
			state
		);
		setIsSubmitting(false);
		if (data.err) {
			setState((prevState) => ({ ...prevState, password: '' }));
			handleExpressErr(data.err);
		} else {
			localStorage.setItem('jwtToken', data.token);
			window.flashes([
				{ msg: 'You have successfuly signed in', type: 'success' },
			]);
			history.push('/');
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

export default SignInForm;

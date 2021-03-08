import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function SignUpForm() {
	const history = useHistory();
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		confirmPassword: '',
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
			`${process.env.REACT_APP_API_URL}/users`,
			state
		);
		setIsSubmitting(false);
		if (data.err) {
			handleExpressErr(data.err);
		} else if (data.errors) {
			setState({
				firstName: data.userFormData.firstName,
				lastName: data.userFormData.lastName,
				username: data.userFormData.username,
				password: '',
				confirmPassword: '',
			});
			window.flashes(data.errors);
		} else {
			window.flashes([
				{ msg: 'You have successfuly signed up', type: 'success' },
			]);
			history.push('/');
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="firstName">First name</label>
				<input
					type="text"
					className="form-control"
					id="firstName"
					placeholder="John"
					name="firstName"
					value={state.firstName}
					required
					maxLength="255"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="lastName">Last name</label>
				<input
					type="text"
					className="form-control"
					id="lastName"
					placeholder="Doe"
					name="lastName"
					value={state.lastName}
					required
					maxLength="255"
					onChange={handleInputChange}
				/>
			</div>
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
			<div className="form-group">
				<label htmlFor="confirmPassword">Password confirmation</label>
				<input
					type="password"
					className="form-control"
					id="confirmPassword"
					name="confirmPassword"
					value={state.confirmPassword}
					required
					minLength="8"
					onChange={handleInputChange}
				/>
			</div>
			<SubmitBtn isSubmitting={isSubmitting} />
		</form>
	);
}

export default SignUpForm;

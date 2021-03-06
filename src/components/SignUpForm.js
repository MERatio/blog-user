import { useState } from 'react';

function SignUpForm() {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		confirmPassword: '',
	});

	function handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setState((prevState) => ({ ...prevState, [name]: value }));
	}

	return (
		<form>
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
					onChange={handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary w-100">
				Submit
			</button>
		</form>
	);
}

export default SignUpForm;

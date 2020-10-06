import React, { useState } from 'react';

import 'style/form.css';

export default function LoginPage() {

	const [values, setValues] = useState({
		email: '',
		password: ''
	})

	function handleSubmit(event) {
		event.preventDefault();
		// make api call with values
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setValues(current => ({...current, [name]: value}));
	}

	return (
		<div>
			<form className="form form--login" onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						value={values.email}
						onChange={handleChange}
						id="email"
						name="email" />
				</fieldset>

				<fieldset>
					<label htmlFor="pwd">Password</label>
					<input
						type="password"
						value={values.password}
						onChange={handleChange}
						id="pwd"
						name="password" />
				</fieldset>

				<button>Submit</button>
			</form>
		</div>
	);
}
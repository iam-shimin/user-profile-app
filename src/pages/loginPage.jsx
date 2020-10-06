import React, { useState } from 'react';

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
			<form onSubmit={handleSubmit}>
				<label htmlFor="email" />
				<input
					type="email"
					value={values.email}
					onChange={handleChange}
					id="email"
					name="email" />

				<label htmlFor="pwd" />
				<input
					type="password"
					value={values.password}
					onChange={handleChange}
					id="pwd"
					name="password" />

				<button>Submit</button>
			</form>
		</div>
	);
}
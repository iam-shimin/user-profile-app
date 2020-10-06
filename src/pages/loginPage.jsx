import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Fieldset from 'components/fieldset';

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
		<section>
			<form className="form form--login" onSubmit={handleSubmit}>
				<Fieldset
					label="Email"
					name="email"
					value={values.email}
					onChange={handleChange} />

				<Fieldset
					label="Password"
					name="password"
					value={values.password}
					onChange={handleChange} />
					
				<button>Submit</button>
			</form>

			<div className="w-50 mg-a">
				New here? <Link to="/register">Register</Link>
			</div>
		</section>
	);
}
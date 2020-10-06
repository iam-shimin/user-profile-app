import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Fieldset from 'components/fieldset';
import Password from 'components/password';
import Email from 'components/email';

import 'style/form.css';

export default function RegistrationPage() {
	const [values, setValues] = useState({
		username: '',
		email: '',
		phone: '',
		password: ''
	})

	function handleChange(event) {
		const { name, value } = event.target;
		setValues(current => ({...current, [name]: value}));
	}

	return (
		<section>
			<form className="form form--registration-form">
				<Fieldset label="User Name" value={values.username} name="username" onChange={handleChange} />
				<Email name="email" value={values.email} onChange={handleChange} />
				<Fieldset label="Phone" value={values.phone} name="phone" type="tel" onChange={handleChange} />
				<Password value={values.password} onChange={handleChange} />
				<button>Submit</button>
			</form>

			<div className="w-50 mg-a">
				Have an account? <Link to="/login">Log In</Link>
			</div>
		</section>
	)
}
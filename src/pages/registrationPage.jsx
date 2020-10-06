import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fieldset from 'components/fieldset';
import Password from 'components/password';
import Email from 'components/email';

import { register } from 'store/actionCreators';

import 'style/form.css';

function RegistrationPage({register, history}) {
	const [values, setValues] = useState({
		username: '',
		email: '',
		phone: '',
		password: ''
	})

	const handleChange = useCallback(event => {
		const { name, value } = event.target;
		setValues(current => ({...current, [name]: value}));
	}, [])

	function handleSubmit(event) {
		event.preventDefault();
		register(values, () => {
			history.push('/');
		});
	}

	return (
		<section>
			<form className="form form--registration-form" onSubmit={handleSubmit}>
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

const mapDispatchToProps = {
	register: register
}

export default connect(null, mapDispatchToProps)(RegistrationPage)
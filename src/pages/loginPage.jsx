import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Fieldset from 'components/fieldset';

import { login } from 'store/actionCreators';

import 'style/form.css';

function LoginPage({ login, history }) {

	const [values, setValues] = useState({
		email: '',
		password: ''
	})

	function handleSubmit(event) {
		event.preventDefault();
		login(values, () => {
			history.push('/');
		})
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

const mapDispatchToProps = {
	login: login
}

export default connect(null, mapDispatchToProps)(LoginPage);
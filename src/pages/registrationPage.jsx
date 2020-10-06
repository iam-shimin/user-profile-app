import React from 'react';
import { Link } from 'react-router-dom';

import Fieldset from 'components/fieldset';

import 'style/form.css';

export default function RegistrationPage() {
	return (
		<section>
			<form className="form form--registration-form">
				<Fieldset label="Email" name="username" />
				<Fieldset label="Phone" name="phone" type="tel" />
				<Fieldset label="Password" name="password" type="password" />
				<Fieldset label="Confirm Password" name="c-password" type="password" />
				<button>Submit</button>
			</form>

			<div className="w-50 mg-a">
				Have an account? <Link href="/">Log In</Link>
			</div>
		</section>
	)
}
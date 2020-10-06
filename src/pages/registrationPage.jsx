import React from 'react';
import { Link } from 'react-router-dom';

import Fieldset from 'components/fieldset';
import Password from 'components/password';

import 'style/form.css';

export default function RegistrationPage() {
	return (
		<section>
			<form className="form form--registration-form">
				<Fieldset label="Email" name="username" />
				<Fieldset label="Phone" name="phone" type="tel" />
				<Password onChange={console.log} />
				<button>Submit</button>
			</form>

			<div className="w-50 mg-a">
				Have an account? <Link href="/">Log In</Link>
			</div>
		</section>
	)
}
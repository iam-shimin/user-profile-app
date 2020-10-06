import React from 'react';

import Fieldset from 'components/fieldset';

export default function RegistrationPage() {
	return (
		<form className="form form--registration-form">
			<Fieldset label="Email" name="username" />
			<Fieldset label="Phone" name="phone" type="tel" />
			<Fieldset label="Password" name="password" type="password" />
			<Fieldset label="Confirm Password" name="c-password" type="password" />
			<button>Submit</button>
		</form>
	)
}
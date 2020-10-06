import React from 'react';

import Fieldset from 'components/fieldset';

export default function RegistrationPage() {
	return (
		<form className="form form--registration-form">
			<Fieldset id="uname" label="Email" name="username" />
			<Fieldset id="phone" label="Phone" name="phone" type="tel" />
			<Fieldset id="password" label="Password" name="password" type="password" />
			<Fieldset id="c-password" label="Confirm Password" name="c-password" type="password" />
		</form>
	)
}
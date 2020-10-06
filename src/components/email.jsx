import React, { useEffect, useState } from 'react';

import Fieldset from './fieldset';

import emailValidationService from 'services/validateEmail';

export default function Email({ name = "email", onChange }) {
	const [value, setValue] = useState('');
	const [error, setError] = useState(null);

	const isValid = !error;

	useEffect(() => {
		const timer = setTimeout(() => {
			if (value) {
				setError(null);
				emailValidationService(value)
					.then(data => {
						const emailExist = !data.success;
						if (emailExist) {
							setError(data);
						} else {
							onChange({target: { name, value }})
						}
					})
					.catch(error => setError(error));
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [value, name, onChange]);

	return (
	<>
		<Fieldset
			label="Email"
			value={value}
			name={name}
			type="email"
			className={isValid? 'green-br': ''}
			onChange={event => {
				const {value} = event.target;
				setValue(value);
			}} />

		{error && <small className="validation-error">{error?.message || error?.details || 'Cannot complete request'}</small>}
	</>
	)
}
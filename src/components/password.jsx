import React, { useEffect, useState } from 'react';

import Fieldset from 'components/fieldset';

export default function Password({onChange}) {

	const [value, setValue] = useState({
		password: '',
		'c-password': ''
	});

	const isValid = value.password === value["c-password"];

	function handleChange(event) {
		const { name, value } = event.target;
		setValue(current => ({...current, [name]: value}));
	}

	useEffect(() => {
		if (isValid) {
			onChange({
				target: {
					value: value.password,
					name: 'password'
				}
			});
		}
	}, [isValid]);

	return (
		<>
			<Fieldset label="Password" value={value.password} onChange={handleChange} name="password" type="password" />
			<Fieldset label="Confirm Password" value={value['c-password']} onChange={handleChange} name="c-password" type="password" />

			{!isValid && <small className="validation-error">Passwords should match</small>}
		</>
	)
}
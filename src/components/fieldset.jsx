import React from 'react';
import PropTypes from 'prop-types';

function Fieldset({id: givenId, label, name, type, value, className, onChange, ...props}) {

	const id = givenId || name;
	
	return (
		<fieldset {...props}>
			<label htmlFor={id}>{label}</label>
			<input type={type} value={value} name={name} id={id} className={className} onChange={onChange && onChange} />
		</fieldset>
	)
}

Fieldset.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func
}

Fieldset.defaultProps = {
	type: 'text'
}

export default Fieldset;
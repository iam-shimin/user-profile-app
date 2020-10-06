import React from 'react';
import PropTypes from 'prop-types';

function Fieldset({id, label, name, type, onChange, ...props}) {
	return (
		<fieldset {...props}>
			<label htmlFor={id}>{label}</label>
			<input type={type} name={name} id={id} onChange={onChange && onChange} />
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
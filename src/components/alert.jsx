import React from 'react';
import { connect } from 'react-redux';

function Alert({error}) {

	const hasError = !!error;

	return (
		<div className={`alert-box${hasError? ' active': ''}`}>
			<span>{error?.message}</span>
			{error?.details && <p>{error.details}</p>}
		</div>
	)
}

const mapStateToProps = state => ({
	error: state.appErrorState
})

export default connect(mapStateToProps)(Alert);
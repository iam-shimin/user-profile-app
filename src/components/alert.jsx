import React from 'react';
import { connect } from 'react-redux';

function Alert({error}) {
	return (
		<div className="alert-box">
			<span>{error?.message}</span>
			{error?.details && <p>{error.details}</p>}
		</div>
	)
}

const mapStateToProps = state => ({
	error: state.appErrorState
})

export default connect(mapStateToProps)(Alert);
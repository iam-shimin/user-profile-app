import React from 'react';
import { connect } from 'react-redux';

function Loader(isLoading) {
	return isLoading && <div className="loader"></div>
}

const mapStateToProps = state => ({
	isLoading: state.appPendingState
})

export default connect(mapStateToProps)(Loader);
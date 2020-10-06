import React from 'react';
import { connect } from 'react-redux';

function Loader(isLoading) {
	return <div className={`loader${isLoading? ' active': ''}`}></div>
}

const mapStateToProps = state => ({
	isLoading: state.appPendingState
})

export default connect(mapStateToProps)(Loader);
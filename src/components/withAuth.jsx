import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function withAuth(WrappedComponent) {
	class Auth extends React.Component {
		static defaultProps = {
			isAuthed: false
		}

		render() {
			const { isAuthed, ...rest } = this.props;

			if (!isAuthed) {
				return <Redirect to="/login" />;
			}

			return <WrappedComponent {...rest} />
		}
	}

	const mapStateToProps = state => ({
		isAuthed: !!state.id
	})

	return connect(mapStateToProps)(Auth);
}
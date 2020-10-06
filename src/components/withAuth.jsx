import React from 'react';
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

	return Auth;
}
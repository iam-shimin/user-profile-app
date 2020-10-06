import React from 'react';

export default function LoginPage() {
	return (
		<div>
			<form>
				<label htmlFor="email" />
				<input type="email" id="email"/>

				<label htmlFor="pwd" />
				<input type="password" id="pwd" />

				<button>Submit</button>
			</form>
		</div>
	);
}
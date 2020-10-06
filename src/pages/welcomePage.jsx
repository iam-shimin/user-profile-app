import React from 'react';

import 'style/welcome.css';

export default function WelcomePage() {
	return (
		<>
			<header className="app-header">
				<span>App</span>
				<nav>
					<a href="/logout">Logout</a>
				</nav>
			</header>

			<section>
				<h1>Welcome, user</h1>
			</section>
		</>
	)
}
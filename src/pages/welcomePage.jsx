import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from 'store/actionCreators';

import 'style/welcome.css';

function WelcomePage({ state, getProfile }) {
	const { username: userName, email, phone, updated, created } = state;

	useEffect(() => {
		getProfile();
	}, [getProfile]);

	return (
		<>
			<header className="app-header">
				<span>App</span>
				<nav>
					<a href="/logout">Logout</a>
				</nav>
			</header>

			<section className="mt-4">
				<h1 className="welcome-text">Welcome, {userName}</h1>
			</section>

			<section className="w-50 mg-a">
				<h2>Details</h2>
				<span className="time-desc">Created: <span>{created}</span></span>
				<span className="time-desc">Updated: <span>{updated}</span></span>
				<div className="user-details">
					<DescriptionItem term="Email" desc={email} />
					<DescriptionItem term="Phone" desc={phone} />
					{[
						"id",
						"firstName",
						"lastName",
						"usertype_id",
						"profilePic",
						"store_id",
						"created_by",
						"updated_by"
					].map(item => <DescriptionItem term={item} desc={state[item] || 'null'} />)}
				</div>
			</section>
		</>
	)
}

function DescriptionItem({term, desc}) {
	return (
		<>
			<span className="term">{term}</span>
			<span className="desc">{desc}</span>
		</>
	)
}

const mapStateToProps = state => ({
	state
})

const mapDispatchToProps = {
	getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
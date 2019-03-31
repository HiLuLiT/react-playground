import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div className="jumbotron">
		<h1>Pluralsight Administration</h1>
		<p>React, Redux and React Router for ultra-responsive web apps.</p>
		{/*// react router handles clicks on any Link component so the page won't post back*/}
		<Link to="about" className="btn btn-primary btn-lg">
			Learn more
		</Link>
	</div>
);

export default HomePage

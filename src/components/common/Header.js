import React from 'react'
// NavLink is an anchor that react router controls
import { NavLink } from 'react-router-dom'

const Header = () => {
	const activeStyle = {color: '#F15B2A'}
	
	return (
		<nav>
			{/*this link will only recieve the activeStyle when on the homepage*/}
			<NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
			<NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>{" | "}
			<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
		</nav>
	)
}

export default Header

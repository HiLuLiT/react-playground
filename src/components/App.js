import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

function App() {
	return (
		<div className="container-fluid">
			{/*// 'exact' prop means only the empty route matches, otherwise this will match any other routes since / is in any route.*/}
			<Route exact path="/" component={HomePage}/>
			<Route path="/about" component={AboutPage}/>
		</div>
	)
}
export default App

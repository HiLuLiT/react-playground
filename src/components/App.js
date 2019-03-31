import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import Header from './common/Header'

function App() {
	return (
		<div className="container-fluid">
			{/*React-router will watch the URL and render the proper route (home/about, based on line 14-15)*/}
			{/*Our header will always display above*/}
			<Header/>
			{/*'exact' prop means only the empty route matches, otherwise this will match any other routes since / is in any route.*/}
			<Route exact path="/" component={HomePage}/>
			<Route path="/about" component={AboutPage}/>
		</div>
	)
}
export default App

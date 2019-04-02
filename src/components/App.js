import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import Header from './common/Header'
import PageNotFound from './PageNotFound'
import CoursesPage from './courses/CoursesPage'

function App() {
	return (
		<div className="container-fluid">
			{/*React-router will watch the URL and render the proper route (home/about, based on line 14-15)*/}
			{/*Our header will always display above*/}
			<Header/>
			{/*Switch allows one route to match, like a switch statement*/}
			<Switch>
				{/*'exact' prop means only the empty route matches, otherwise this will match any other routes since / is in any route.*/}
				<Route exact path="/" component={HomePage}/>
				<Route path="/about" component={AboutPage}/>
				<Route path="/courses" component={CoursesPage}/>
				{/*we don't need to declare a path here, if none of the above match this should load */}
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	)
}
export default App

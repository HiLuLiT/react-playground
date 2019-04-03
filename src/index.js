import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import './index.css'
import configureStore from './redux/configureStore'
import {Provider as ReduxProvider} from 'react-redux'

// it can be useful to pass initial state into the store here if you're server rendering or initializing your redux store with data from localStorage.
const store = configureStore()

render(
	<ReduxProvider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</ReduxProvider>,
	document.getElementById('app'))

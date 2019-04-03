import React from 'react'

class CoursesPage extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			course: {
				title: ""
			}
		}
		
	}
	
	// best bind approach - arrow functions. they inherit the binding context of their enclosing scope.
	handleChange = event => {
		// create a copy of our course object that refelcts the new title
		// there's an issue - our function is inheriting the this context of the caller (the change handler). we need to bind this to our instance.
		const course = { ...this.state.course, title: event.target.value }
		this.setState({
			// object shorthand syntax - if right equals left (course: course)
			course
		})
	}
	render() {
		return (
			<form>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" onChange={this.handleChange} value={this.state.course.title}/>
				<input type="submit" onChange={this.handleChange} value="Save"/>
			</form>
		)
	}
}

export default CoursesPage

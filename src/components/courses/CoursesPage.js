import React from 'react'
// let's connect CoursesPage to Redux!
import {connect} from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'


class CoursesPage extends React.Component {
		state = {
			course: {
				title: ""
			}
	}
	
	handleChange = event => {
		const course = { ...this.state.course, title: event.target.value }
		this.setState({ course })
	}
	
	handleSubmit = event => {
			// prevent the form from causing the page to reload
		event.preventDefault();
		// The ugly way first - dispatching an action without using mapDispatchToProps as one of connect's parameters.
		// since we didn't declare mapDispatchToProps, connect automatically adds Dispatch as a prop.
		this.props.dispatch(courseActions.createCourse(this.state.course))
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" onChange={this.handleChange} value={this.state.course.title}/>
				<input type="submit" onChange={this.handleChange} value="Save"/>
				{/*display list of courses from redux store*/}
				{/*concise arrow syntax - we can ommit the return keyword cause we wrapped our expression in parentheses*/}
				{this.props.courses.map(course => (
					<div key={course.title}>{course.title}</div>
				))}
			</form>
		)
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


//This func determines what state is passed to our component via props.
// it has 2 arguments - state, and ownProps. we'll use ownProps later (it gives us access to the props that are being attached to the component)
function mapStateToProps(state, ownProps) {
	return {
		// be specific - request only the data your component needs.
		courses: state.courses
	}
}

// the 2 parantheses ()() - this is 2 function calls. the connect function returns a function, that function then calls our component.
export default connect(mapStateToProps)(CoursesPage)
// mapDispatchToProps parameter is optional, when we omit it, our component gets a dispatch prop injected automatically so we can dispatch actions.

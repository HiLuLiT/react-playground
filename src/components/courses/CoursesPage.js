import React from 'react'
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
		event.preventDefault();
		this.props.createCourse(this.state.course)
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" onChange={this.handleChange} value={this.state.course.title}/>
				<input type="submit" onChange={this.handleChange} value="Save"/>
				{this.props.courses.map(course => (
					<div key={course.title}>{course.title}</div>
				))}
			</form>
		)
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	// since we declared mapDispatchToProps, dispatch is no longer injected.
	// Only the actions we declared in mapDispatchToProps are passed in.
	createCourse: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	return {
		courses: state.courses
	}
}

// second way to use mapDispatchToProps - wrap it Manually
// recives dispatch as sole argument
// the actions we choose to return here will be available on props
function mapDispatchToProps(dispatch) {
	return {
		// here we pass our action creators to dispatch, to fire the action.
		// remember if you don't call dispatch nothing happens. action creators must be called by dispatch.
		createCourse: course => dispatch(courseActions.createCourse(course))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)

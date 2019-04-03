import React from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'

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
		this.props.actions.createCourse(this.state.course)
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
	actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
	return {
		courses: state.courses
	}
}
// redux comes with a helper function to save us from have to manually wrap our action creators in a dispatch call
// this function is called bindActionCreators
function mapDispatchToProps(dispatch) {
	return {
		// this one line ends up wrapping all of our course actions -
		// right now it has only one, but if we add more no need to change this line.
		actions: bindActionCreators(courseActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)

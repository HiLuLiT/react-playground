import * as types from './actionTypes'

// this function is called 'action creator' - creates an action.

export function createCourse(course) {
	// all actions must have type property
	return { type: types.CREATE_COURSE, course: course }
}

// this function is called 'action creator' - creates an action.

export function createCourse(course) {
	// all actions must have type property
	return { type: "CREATE_COURSE", course: course }
}

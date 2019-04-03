// reducer is a function that accepts state and action and returns a new state
// state should be initialzed to an empty array since this will be storing an array of courses.

export default function courseReducer(state =[], action) {
	switch (action.type) {
		case "CREATE_COURSE":
		// state.push(action.course) - can't do this, it will mutate the state
			// copy the existing array which is held in state (...state)
			// and then add the course that was passed in
			return [...state, { ...action.course }]
		
		// if the reducer receives an action that it doesn't care about, it should return the unchanged state.
		default:
			return state
	}
}

export const pannelStates = {
	isFetching: true,
	notification: false,
	notificationMessage: '',
	notificationType: 'success',
}

export const pannelReducer = (state, action) => {
	switch (action.type) {
		case "FETCHING":
			return { ...state, isFetching: action.data }
		case "UPDATE_VJ":
			return { ...state, isFetching: false }
			case "SET_NOTIFICATION":
			const {notification, notificationMessage, notificationType} = action.data
			return { ...state, notification, notificationMessage, notificationType }
		default:
			return state
	}
}
export const pannelActions = props => {
	return {
		loadVideosStart: () => {
			props.dispatch({ type: "LOAD_VIDEOS_START" })
		},
		setNotification: (notification, notificationMessage, notificationType) => {
			props.dispatch({type: 'SET_NOTIFICATION', data: {notification, notificationMessage, notificationType} })
		},
		fetching: (data) => {
			props.dispatch({ type: 'FETCHING', data })
		},
	}
}
  
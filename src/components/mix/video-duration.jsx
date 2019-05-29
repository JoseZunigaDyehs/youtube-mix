import React, { useState, useEffect } from "react"

const VideoDuration = ({ mixId, player, duration, start }) => {
	const [advance, setAdvance] = useState(0)
	useEffect(() => {
		if (start !== 0) {
			debugger
			const realAdvance = (duration / 100) * advance
			setAdvance(realAdvance)
		}
		//getSeconds();
	}, [duration, start])

	const getSeconds = () => {
		// setInterval(() => {
		setAdvance(advance + 1)
		// }, 1000);
	}

	return (
		<div className="duration">
			<div className="advance" style={{ width: advance + "%" }} />
		</div>
	)
}

export default VideoDuration

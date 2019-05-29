import React, { useMemo } from "react"
import PropTypes from "prop-types"

const IsFetching = ({ fetching, children, showChildren }) => {
	const content = () => {
		return useMemo(() => {
			if (fetching) {
				return (
					<div className="spinner">
						<div className="loader" />
					</div>
				)
			}
			return null
		}, [fetching, children, showChildren])
	}

	return content()
}

export default IsFetching

IsFetching.defaultProps = {
	showChildren: false
}

IsFetching.propTypes = {
	showChildren: PropTypes.bool
}

import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ icon, func, name }) => {
    const style = {
        backgroundImage:  `url(${icon})`
    }
    return (
        <button
            style={style}
            onClick={() => {
                func();
            }}
        >
            {/* {name} */}
        </button>
    )
}

export default Button;


Button.propTypes = {
    icon: PropTypes.any.isRequired,
    func: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
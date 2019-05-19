import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ icon, func, children, className = '' }) => {
    const style = {
        backgroundImage: `url(${icon})`
    }
    return (
        <button
            style={style}
            onClick={() => {
                func();
            }}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button;


Button.propTypes = {
    icon: PropTypes.any.isRequired,
    func: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
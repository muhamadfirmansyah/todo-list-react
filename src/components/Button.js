import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Button.css'

const Button = ({ text, variant, action }) => {
    return (
        <button className={`btn btn-${variant}`} 
                onClick={ action }>
                { text }
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}

export default Button;
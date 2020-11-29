import React from 'react'
import PropTypes from 'prop-types'
import './TimerButton.css'

interface timerProp {
    buttonAction: ()=>void,
    buttonValue: string
}

const TimerButton:React.FC<timerProp> = ({buttonAction,buttonValue}) => {
    return (
        <div className='button-container' onClick={buttonAction}>
            <p className='button-value'>{buttonValue}</p>
        </div>
    )
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
}
export default TimerButton

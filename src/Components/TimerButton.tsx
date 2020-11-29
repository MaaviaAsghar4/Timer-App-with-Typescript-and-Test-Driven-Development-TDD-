import React from 'react'
import PropTypes from 'prop-types'
import './TimerButton.css'

interface timerProp {
    buttonAction: ()=>void,
    buttonValue: string,
    isOn: boolean
}

const TimerButton:React.FC<timerProp> = ({buttonAction,buttonValue, isOn}) => {
    return (
        <div className= {isOn? 'button-disable' : 'button-container'} onClick={buttonAction}>
            <p className='button-value'>{buttonValue}</p>
        </div>
    )
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired
}
export default TimerButton

import React, { useState } from 'react'
import './Start.css'

const Start = ({ setUserName }) => {

    const [inputValue, setInputValue] = useState(null)

    const handleOnchange = (e) => {
        setInputValue(e.target.value)
    }

    const handleStart = (e) => {
        setUserName(inputValue)
    }

    return (
        <div className='start'>
            <input className='userInput' placeholder='enter your name' onChange={handleOnchange} />
            <button className='startBtn' onClick={handleStart} >Play</button>
        </div>
    )
}

export default Start

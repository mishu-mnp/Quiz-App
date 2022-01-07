import React from 'react'
import './QuizData.css'

const QuizData = () => {
    return (
        <div className='quiz-data'>
            <div className="question">What is ReactJs ?</div>
            <div className="answers">
                <div className="answer active">Frontend Framework</div>
                <div className="answer correct">Backend Framework</div>
                <div className="answer wrong">Frontend Language</div>
                <div className="answer">Programming Language</div>
            </div>
        </div>
    )
}

export default QuizData

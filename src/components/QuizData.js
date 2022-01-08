import React, { useEffect, useState } from 'react'
import './QuizData.css'
import data from '../questions'

const QuizData = ({ setQuestionNumber, questionNumber, setStop }) => {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [classname, setClassName] = useState("answer")

    useEffect(() => {
        setQuestion(data[questionNumber - 1])

    }, [questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

    const handleAnswer = (a) => {
        setSelectedAnswer(a)
        setClassName("answer active")
        delay(3000, () => {
            setClassName(a.correct ? 'answer correct' : 'answer wrong')
        })

        delay(6000, () => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1)
            } else {
                setStop(true)
            }
        })
    }

    return (
        <div className='quiz-data'>
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div key={a.text} className={selectedAnswer === a ? classname : 'answer'} onClick={() => handleAnswer(a)} >{a.text}</div>
                ))}
            </div>
        </div>
    )
}

export default QuizData

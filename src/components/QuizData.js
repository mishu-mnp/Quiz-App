import React, { useEffect, useState } from 'react'
import './QuizData.css'
import data from '../questions'
import useSound from 'use-sound'
import play from '../assets/sounds/play.mp3'
import correct from '../assets/sounds/correct.mp3'
import wrong from '../assets/sounds/wrong.mp3'

const QuizData = ({ setQuestionNumber, questionNumber, setStop }) => {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [classname, setClassName] = useState("answer")

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        setTimeout(() => {
            letsPlay()
        }, 3000)
    }, [letsPlay])

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

        delay(5000, () => {
            if (a.correct) {
                correctAnswer()
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSelectedAnswer(null)
                })
            } else {
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                })

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

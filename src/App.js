import './App.css';
import { useEffect, useMemo, useState } from 'react'
import QuizData from './components/QuizData';
import Timer from './components/Timer';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('$ 0')

  const amountPyramid = useMemo(() =>
    [
      { id: 1, amount: '$ 100' },
      { id: 2, amount: '$ 200' },
      { id: 3, amount: '$ 300' },
      { id: 4, amount: '$ 500' },
      { id: 5, amount: '$ 1000' },
      { id: 6, amount: '$ 2000' },
      { id: 7, amount: '$ 4000' },
      { id: 8, amount: '$ 8000' },
      { id: 9, amount: '$ 16000' },
      { id: 10, amount: '$ 32000' },
      { id: 11, amount: '$ 64000' },
      { id: 12, amount: '$ 125000' },
      { id: 13, amount: '$ 250000' },
      { id: 14, amount: '$ 500000' },
      { id: 15, amount: '$ 1000000' }
    ].reverse(),
    [])

  useEffect(() => {
    questionNumber > 1 && setEarned(amountPyramid.find((a) => a.id === questionNumber - 1).amount)
  }, [amountPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1>You Earned : {earned}</h1> : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
            </div>
            <div className="bottom">
              <QuizData
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber} />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {amountPyramid.map((amount) => (
            <li key={amount.id} className={`moneyListItem ${amount.id === questionNumber ? 'active' : ''}`}>
              <span className="moneyListItemNumber">{amount.id}</span>
              <span className="moneyListItemAmount">{amount.amount}</span>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

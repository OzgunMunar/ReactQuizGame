
import React from "react"
import Quiz from "./Quiz.js"
import { nanoid } from 'nanoid'

function App() {

  const [started, setStarted] = React.useState(false)
  const [questionData, setQuestionData] = React.useState([])

  React.useEffect(() => {

    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(data => 

      setQuestionData(data.results.map(item => {
        
        let randomIndex = Math.floor(Math.random() * 4)
        item.incorrect_answers.splice(randomIndex, 0, item.correct_answer)
        let all_answers = item.incorrect_answers.map(ans=> {

          return {
            answer_id: nanoid(),
            answer: ans,
            isSelected: false
          }

        })
        
        return {
    
          id: nanoid(),
          question: item.question,
          correctAnswer: item.correct_answer,
          allAnswers: all_answers
    
        }

      }))
      
    )
    
  }, [started])

  function isStartAgain(s){

    setStarted(status => s)

  }
 
  return (

    <div className="main">
      {
        (started) ? <Quiz questions={questionData} isFinished = {isStartAgain}/> :
        <div className="main_div_content">
          <h1>Quizzical</h1>
          <h3>Welcome to the quiz game.</h3>
          <button onClick={() => {setStarted(status=>!status)}}>Start quiz</button>

        </div>
      }
    </div>

  );
}

export default App;

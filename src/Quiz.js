import React from "react"
import Question from "./Question.js"

function Quiz(props) {

    const [questionsCollection, setQuestionCollection] = React.useState(
        function () {
            return props.questions
        }
    )

    const [isCheckAnswers, setIsCheckAnswers] = React.useState(false)
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = React.useState(0)
    
    const questionsLines = questionsCollection.map(line => {
        
        return (
            <div key={line.id} >
                <Question field={line} status={isCheckAnswers} isCorrect={calcNumberOfCorrectAnswers}/>
                <hr />
            </div>
        )
        
    })

    function checkAnswers() {

        setIsCheckAnswers(answer => !answer)

    }

    function calcNumberOfCorrectAnswers(number) {

        setNumberOfCorrectAnswers(num => num + number)

    }

    return (
        <div className="quiz_container">
            <h1 className="quiz_header">Quiz Questions</h1>
            {questionsLines}
            <div className="quiz_checkAnswer_container">
                {
                    (isCheckAnswers) ?
                    <div>
                        <span className="quiz_resultText_span">You scored {numberOfCorrectAnswers} / 5 correct answers</span>
                        <button className="quiz_checkAnswer_button" onClick={() => props.isFinished(false)}>Play Again</button>
                    </div>
                    :
                    <button className="quiz_checkAnswer_button" onClick={checkAnswers}>Check Answers</button>    
                }
                {/* <button className="quiz_checkAnswer_button" onClick={checkAnswers}>Check Answers</button> */}
            </div>
        </div>
    )

}

export default Quiz
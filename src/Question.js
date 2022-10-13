import React from "react"
import Answer from "./Answer.js"
import { nanoid } from "nanoid"
import { decode } from "html-entities"

function Question(props) {

    const [questionLine, setQuestionLine] = React.useState(
        function() {

            return props.field

        }
    )

    const [answersCollection, setAnswersCollection] = React.useState(
        function() {

            return props.field.allAnswers

        }
    )

    React.useEffect(() => {

        if(props.status) {
            
            let selectedAnswer = ""
    
            for(let i = 0; i < answersCollection.length; i++) {
    
                if(answersCollection[i].isSelected) {
                    selectedAnswer = answersCollection[i].answer
                }
    
                if(selectedAnswer === questionLine.correctAnswer) {
                    props.isCorrect(1)
                }
                selectedAnswer = ""
            }
            
        }
        
    }, [props.status])
    
    const answers = answersCollection.map(line => {

        let selectedOne = ""
        let correctOrNot = false
        let rightAnswer = ""

        if(line.isSelected) {

            selectedOne = line.answer
            
        }
        
        if(selectedOne === questionLine.correctAnswer) {

            correctOrNot = true

        } else {

            rightAnswer = questionLine.correctAnswer

        }
        
        return (

            <div key={line.answer_id}>
                
                <Answer 
                
                    key = {nanoid()} 
                    possibleAnswers = {line}
                    isCorrect = {correctOrNot}
                    rightAnswer = {rightAnswer}
                    handleSelect = {changeSelected}
                    isClickedAnswerButton = {props.status}

                />

            </div>

        )
        
    })
    
    function changeSelected(id) {
        
        setAnswersCollection(colle=> {
            
            return colle.map(lne=> {

                return (
                    (lne.answer_id === id) ?
                    {
                        ...lne, isSelected: !lne.isSelected
                    } :
                    {
                        ...lne, isSelected: false
                    }
                )
            })

        })
        
    }

    if(props.status){}

    return (
        <div className="question_container">

            <h3 className="quiz_question">{ decode(questionLine.question) }</h3>

            <div className="answer_container">

                { decode(answers) }

            </div>
            
        </div>
    )

}

export default Question
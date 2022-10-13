import React from "react"

function Answer(props) {

    const [answerLine, setAnswerLine] = React.useState(

        function () {

            return props.possibleAnswers

        }

    )

    const beforeCheckStyle = {

        backgroundColor: (answerLine.isSelected) ? "#f7bab2" : "none"

    }

    let afterCheckStyle = {}

    if(props.isCorrect) {

        afterCheckStyle = {

            backgroundColor: "#94D7A2",
            border: "none"

        }

    } 
    else if(!props.isCorrect && answerLine.isSelected) {

        afterCheckStyle = {

            backgroundColor: "#f03921",
            border: "none"

        }

    } 
    
    if((answerLine.answer === props.rightAnswer)) {

        afterCheckStyle = {

            backgroundColor: "#94D7A2",
            border: "none"

        }

    }

    return (
        <div>
        {
            (props.isClickedAnswerButton) ?
            <div

                className="answer_div"
                style={afterCheckStyle}

            >
                {answerLine.answer}
            </div>
            :
            <div

                className="answer_div"
                style={beforeCheckStyle}
                onClick={()=>{props.handleSelect(answerLine.answer_id)}}

            >
                {answerLine.answer}
            </div>
        }
        </div>
    )

}

export default Answer
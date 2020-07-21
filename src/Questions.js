import React from 'react';
import Answers from './Answers';

const Questions = (props) => {
    const {Questions} = props;
    const QuestionList = Questions.map(Q => {
        return(
            <div className="Question" key={Q.QuestionID}>
                <div>Question {Q.QuestionID} : {Q.QuestionText}</div>
                <Answers Answers={Q.Answers} AnswerQuantity={Q.AnswerQuantity}/>
            </div> 
        );
    })
    return (QuestionList);
}

export default Questions
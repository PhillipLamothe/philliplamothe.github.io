import React from 'react';

const Answers = ({Answers, AnswerQuantity}) => {
    //const {Answers} = props.Answers;
    let AnswerList = Answers.map(A => {
        return(
            <div className="Answer" key={A.AnswerID}>
                <div>{A.AnswerID}: {A.AnswerText}</div>
            </div>
        );
    })
    AnswerList = AnswerList.slice(0, AnswerQuantity)
    return(AnswerList);
}

export default Answers
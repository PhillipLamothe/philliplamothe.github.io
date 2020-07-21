import React from 'react';

// selectQuiz = (e) => {
//     for (Quiz in props.quizzes) {
//         if (Quiz.QuizTitle == e.target.name) {
//             openQuiz(Quiz);
//         }
//     }
// }

const Browse = (props) => {

    // selectQuiz = (e) => {
    //     for (Quiz in props.quizzes) {
    //         if (Quiz.QuizTitle == e.target.name) {
    //             openQuiz(Quiz);
    //         }
    //     }
    // }

    let Quizzes = props.quizzes;
    let QuizList = Quizzes.map(Qz => {
        return (
        <div className="Quiz">
            <p>{Qz.QuizTitle}</p>
            <button name={Qz.QuizTitle} onClick={() => {props.openQuiz(Qz)}}>Take Quiz</button>
        </div>
        );
    })
    return (
        <div className="Browse">
            <h1 className="">BumbleFeed</h1>
            {QuizList}
        </div>
    );
    
}
 
export default Browse
import React, { Component } from 'react';
import Questions from './Questions'
import AddQuestion from './AddQuestion';

class NewQuiz extends Component {
    state = {
        QuizTitle: "",
        Questions: [
            {
                QuestionID: 1,
                QuestionText: "Test Question",
                AnswerQuantity: 4,
                Answers: [
                    {
                        AnswerID: "A",
                        AnswerText: "Test1"
                    },
                    {
                        AnswerID: "B",
                        AnswerText: "Test2"
                    },
                    {
                        AnswerID: "C",
                        AnswerText: "Test3"
                    },
                    {
                        AnswerID: "D",
                        AnswerText: "Test4"
                    },
                    {
                        AnswerID: "E",
                        AnswerText: ""
                    },
                    {
                        AnswerID: "F",
                        AnswerText: ""
                    },
                    {
                        AnswerID: "G",
                        AnswerText: ""
                    },
                    {
                        AnswerID: "H",
                        AnswerText: ""
                    }
                ]
            }
        ]
    }

    handleTitle = (e) => {
        this.setState({
            QuizTitle: e.target.value
        })
    }

    addQuestion = (Question) => {
        let Questions = [...this.state.Questions, Question];
        this.setState({
            Questions: Questions
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addQuiz(this.state)
        this.props.changePage("ConfirmQuizSubmit")
    }

    render() {
        return(
            <div className="NewQuiz">
                <h1 className="">BumbleFeed</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="QuizTitle">Enter the title for your quiz:<br/></label>
                    <input type="text" id="QuizTitle" onChange={this.handleTitle}></input>
                    <Questions Questions={this.state.Questions}/>
                    <AddQuestion addQuestion={this.addQuestion}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewQuiz
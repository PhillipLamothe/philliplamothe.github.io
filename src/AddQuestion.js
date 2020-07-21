import React, { Component } from 'react';
import AddAnswers from './AddAnswers';

class AddQuestion extends Component {
    state = {
        QuestionID: null,
        QuestionText: "",
        AnswerQuantity: 4,
        Answers: []
    }

    handleText = (e) => {
        this.setState({
            QuestionText: e.target.value
        })
    }

    handleAnswerQuantity = (e)  => {
        this.setState({
            AnswerQuantity: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            QuestionID: Math.random(),
        })
        this.props.addQuestion(this.state);
        this.clearNewQuestion();
    }

    addAnswers = (NewAnswers) => {
        this.setState({
            Answers: NewAnswers
        })
    }

    clearNewQuestion = (e) => {
        document.getElementById("QuestionText").value = "";
        document.getElementById("A").value = "";
        document.getElementById("B").value = "";
        try {
           document.getElementById("C").value = ""; 
        }
        catch {}
        try {
            document.getElementById("D").value = "";
        }
        catch {}
        try {
        document.getElementById("E").value = "";
        }
        catch {}
        try {
        document.getElementById("F").value = "";
        }
        catch {}
        try {
        document.getElementById("G").value = "";
        }
        catch {}
        try {
        document.getElementById("H").value = "";
        }
        catch {}
    }

    render() {
        return(
            <div className="NewQuestion">
                <form>
                    <label htmlFor="QuestionText">Enter a new question:</label>
                    <input type="text" onChange={this.handleText} id="QuestionText"></input>
                    <br/>
                    <label htmlFor="AnswerQuantity"> Enter the number of answers:</label>
                    <input type="number" min="2" max="8" id="AnswerQuantity" defaultValue="4" onChange={this.handleAnswerQuantity}></input>
                    <AddAnswers addAnswers={this.addAnswers} AnswerQuantity={this.state.AnswerQuantity}  />
                    <button onClick={this.handleSubmit}>Add Question</button>    
                </form>
                
            </div>
        );
    }

}

export default AddQuestion
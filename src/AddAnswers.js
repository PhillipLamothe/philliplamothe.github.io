import React, { Component } from 'react';

class AddAnswers extends Component {
    state = { 
        NewAnswers: [
            {
                AnswerID: "A",
                AnswerText: ""
            },
            {
                AnswerID: "B",
                AnswerText: ""
            },
            {
                AnswerID: "C",
                AnswerText: ""
            },
            {
                AnswerID: "D",
                AnswerText: ""
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


    handleText = (e) => {
        const NewAnswers = this.state.NewAnswers.map(A => {
            if (e.target.id === A.AnswerID) {
                return(
                    {
                        AnswerID: A.AnswerID,
                        AnswerText: e.target.value
                    }
                );
            }
            else {
                
                return(
                    {
                        AnswerID: A.AnswerID,
                        AnswerText: A.AnswerText
                    }
                );
            }
        })
        this.setState({
            NewAnswers: NewAnswers
        })
        this.props.addAnswers(NewAnswers);
    }

    render() {
        const {AnswerQuantity} = this.props;
        if (AnswerQuantity == 2) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 3) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 4) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                    <label htmlFor="D">Answer D:</label>
                    <input type="text" onChange={this.handleText} id="D"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 5) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                    <label htmlFor="D">Answer D:</label>
                    <input type="text" onChange={this.handleText} id="D"></input>
                    <br/>
                    <label htmlFor="E">Answer E:</label>
                    <input type="text" onChange={this.handleText} id="E"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 6) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                    <label htmlFor="D">Answer D:</label>
                    <input type="text" onChange={this.handleText} id="D"></input>
                    <br/>
                    <label htmlFor="E">Answer E:</label>
                    <input type="text" onChange={this.handleText} id="E"></input>
                    <br/>
                    <label htmlFor="F">Answer F:</label>
                    <input type="text" onChange={this.handleText} id="F"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 7) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                    <label htmlFor="D">Answer D:</label>
                    <input type="text" onChange={this.handleText} id="D"></input>
                    <br/>
                    <label htmlFor="E">Answer E:</label>
                    <input type="text" onChange={this.handleText} id="E"></input>
                    <br/>
                    <label htmlFor="F">Answer F:</label>
                    <input type="text" onChange={this.handleText} id="F"></input>
                    <br/>
                    <label htmlFor="G">Answer G:</label>
                    <input type="text" onChange={this.handleText} id="G"></input>
                    <br/>
                </div>
            ); 
        }
        if (AnswerQuantity == 8) {
            return(
                <div className="NewAnswer">
                    <label htmlFor="A">Answer A:</label>
                    <input type="text" onChange={this.handleText} id="A"></input>
                    <br/>
                    <label htmlFor="B">Answer B:</label>
                    <input type="text" onChange={this.handleText} id="B"></input>
                    <br/>
                    <label htmlFor="C">Answer C:</label>
                    <input type="text" onChange={this.handleText} id="C"></input>
                    <br/>
                    <label htmlFor="D">Answer D:</label>
                    <input type="text" onChange={this.handleText} id="D"></input>
                    <br/>
                    <label htmlFor="E">Answer E:</label>
                    <input type="text" onChange={this.handleText} id="E"></input>
                    <br/>
                    <label htmlFor="F">Answer F:</label>
                    <input type="text" onChange={this.handleText} id="F"></input>
                    <br/>
                    <label htmlFor="G">Answer G:</label>
                    <input type="text" onChange={this.handleText} id="G"></input>
                    <br/>
                    <label htmlFor="H">Answer H:</label>
                    <input type="text" onChange={this.handleText} id="H"></input>
                    <br/>
                </div>
            ); 
        }
    }
}

export default AddAnswers
import React, { Component } from 'react';

class Quiz extends Component {

    render() {
        return (
            <div className="Quiz">
                <h1 className="">BumbleFeed</h1>
                <p>{this.props.QuizTitle}</p>
            </div>
        );
    }
}

export default Quiz

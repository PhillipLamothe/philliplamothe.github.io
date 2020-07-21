import React, { Component } from 'react';
import NewQuiz from './NewQuiz'
import Browse from './Browse'
import Quiz from './Quiz'

class App extends Component {
  state = {
    currentPage: "Homepage",
    currentQuiz: null,
    quizzes: []
  }

  handleClick = (e) => {
    this.setState({
      currentPage: e.target.name
    })
  }

  addQuiz = (Quiz) => {
    let quizzes = [...this.state.quizzes, Quiz]
    this.setState({
      quizzes: quizzes
    })
    console.log(this.state.quizzes);
  }

  changePage = (NewPage) => {
    this.setState({
      currentPage: NewPage
    })
  }

  openQuiz = (Quiz) => {
    this.setState({
      currentQuiz: Quiz,
      currentPage: "Quiz"
    })
  }

  // selectQuiz = (QuizTitle) => {
  //     let Quiz = null
  //     for (Quiz in this.state.quizzes) {
  //       if (Quiz.QuizTitle == QuizTitle) {
  //           openQuiz(Quiz);
  //       }
  //     }
  //   }
  render() {
    if (this.state.currentPage == "Homepage") {
      return (
        <div className="Homepage">
          <h1 className="">BumbleFeed</h1>
          <p>Welcome to BumbleFeed! <br/>
          Your one stop solution for quiz making & quiz taking.</p>
          <div className="BrowseButton">
            <button name="Browse" onClick={this.handleClick}>Browse Quizzes</button>
            <p>Search through out wide selection of available quizzes</p>
          </div>
          <div className="CreateButton">
            <button name="NewQuiz" onClick={this.handleClick}>Create a Quiz</button>
            <p>Design and publish your very own personalized quiz</p>
          </div>
        </div>
      ); 
    }
    if (this.state.currentPage == "NewQuiz") {
      return (
        <NewQuiz addQuiz={this.addQuiz} changePage={this.changePage}/>
      );
    }
    if (this.state.currentPage == "ConfirmQuizSubmit") {
      return (
        <div className="ConfirmQuizSubmit">
          <h1 className="">BumbleFeed</h1>
          <p>Your quiz has been successfully submitted.</p>
          <div className="HomeButton">
            <p>Return to Homepage: </p>
            <button name="Homepage" onClick={this.handleClick}>Home</button>
          </div>
          <div className="BrowseButton">
            <p>Search through out wide selection of available quizzes:</p>
            <button name="Browse" onClick={this.handleClick}>Browse Quizzes</button>
          </div>
        </div>
      );
    }
    if (this.state.currentPage == "Browse") {
      return (
        <Browse quizzes={this.state.quizzes} openQuiz = {this.openQuiz} selectQuiz={this.selectQuiz}/>
      );
    }
    if (this.state.currentPage == "Quiz") {
      return (
        <Quiz Quiz={this.currentQuiz}></Quiz>
      );
    }
  }
}

export default App;

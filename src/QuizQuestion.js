import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

  handleClick(buttonText){
    console.log(buttonText, this.props.quiz_question.answer);
    if (buttonText === this.props.quiz_question.answer){
      console.log("FOOO!");
      this.props.showNextQuestionHandler();
    }
  }

  render(){
    const question = this.props.quiz_question;
    return (
      <main>
        <section>
          <p>{question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            //I can't use my local variable because of PluralSight check
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
              return <QuizQuestionButton
                key={index}
                button_text={answer_option}
                clickHandler={this.handleClick.bind(this)}
                />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion

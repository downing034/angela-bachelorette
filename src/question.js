import React from 'react'

class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showQuestion: true,
      showAnswer: false
    }
    this.showAnswer = this.showAnswer.bind(this)
  }

  showAnswer() {
    this.setState({
      showQuestion: false,
      showAnswer: true
    })
  }

  render() {
    return (
      <div className="white-text">
        {this.renderQuestion()}
        {this.renderAnswer()}
      </div>
    )
  }

  renderQuestion() {
    const { showQuestion } = this.state
    const { questionText } = this.props
    if(showQuestion) {
      return (
        <div>
          <h6
            className="text-center question-and-answer-text"
            onClick={this.showAnswer}
          >{questionText}</h6>
        </div>
      )
    }
  }

  renderAnswer() {
    const { showAnswer } = this.state
    const { id, answerText, onClose } = this.props
    if(showAnswer) {
      return (
        <div>
          <h6
            className="text-center question-and-answer-text"
            onClick={() => onClose(id)}
          >{answerText}</h6>
        </div>
      )
    }
  }
}

Question.displayName = 'Question'

export default Question;

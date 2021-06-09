import React from 'react'
import twoHundred from './images/200.jpeg'
import fourHundred from './images/400.jpeg'
import sixHundred from './images/600.jpeg'
import eightHundred from './images/800.jpeg'
import oneThousand from './images/1000.jpeg'

const imageMap = {
  200: twoHundred,
  400: fourHundred,
  600: sixHundred,
  800: eightHundred,
  1000: oneThousand
}

class QuestionImage extends React.Component {

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
    const { question } = this.props

    if(showQuestion) {
      return (
        <div>
          <img
            alt="question"
            className="question-and-answer-text rounded mx-auto d-block"
            src={imageMap[Number(question.value)]}
            onClick={this.showAnswer}
            style={{
              width: "30%"
            }}
          />
        </div>
      )
    }
  }

  renderAnswer() {
    const { showAnswer } = this.state
    const { id, question, onClose } = this.props
    if(showAnswer) {
      return (
        <div>
          <h6
            className="text-center question-and-answer-text"
            onClick={() => onClose(id)}
          >{question.answerText}</h6>
        </div>
      )
    }
  }
}

QuestionImage.displayName = 'QuestionImage'

export default QuestionImage;

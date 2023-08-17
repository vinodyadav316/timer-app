import {Component} from 'react'
import './index.css'

const PLAY_BTN = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const PAUSE_BTN = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'

class DigitalTimer extends Component {
  state = {isChangeImg: true}

  OnchangeBtn = () => {
    const {isChangeImg} = this.state
    this.setState({isChangeImg: !isChangeImg})
  }

  render() {
    const {isChangeImg} = this.state
    const changeImg = isChangeImg ? PLAY_BTN : PAUSE_BTN
    const changeText = isChangeImg ? 'Start' : 'Pause'
    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="times-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
              alt="timer-elapsed"
              className="bg-img"
            />
          </div>
          <div className="content-container">
            <div className="start-reset-con">
              <button type="button" className="btn" onClick={this.OnchangeBtn}>
                <img src={changeImg} alt="play icon" className="play-icon" />
              </button>
              <p className="start">{changeText}</p>

              <button type="button" className="btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="play icon"
                  className="play-icon"
                />
              </button>
              <p className="start">Reset</p>
            </div>
            <div className="timer-plus-minus-con">
              <p className="set-timer">Set Timer Limit</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    backgroundColor: 'dark',
    headingColor: 'white',
  }

  changeBackground = () => {
    const {backgroundColor, isDarkMode, headingColor} = this.state
    if (
      backgroundColor === 'dark' &&
      isDarkMode === true &&
      headingColor === 'white'
    ) {
      this.setState({
        backgroundColor: 'light',
        isDarkMode: false,
        headingColor: 'black',
      })
    } else {
      this.setState({
        backgroundColor: 'dark',
        isDarkMode: true,
        headingColor: 'white',
      })
    }
  }

  render() {
    const {backgroundColor, isDarkMode, headingColor} = this.state
    return (
      <div className="bg-container">
        <div className={`content-container ${backgroundColor}`}>
          <h1 className={`${headingColor} heading `}>Click To Change Mode</h1>
          {isDarkMode ? (
            <button
              className="light-mode mode-btn"
              type="button"
              onClick={this.changeBackground}
            >
              Light Mode
            </button>
          ) : (
            <button
              className="mode-btn"
              type="button"
              onClick={this.changeBackground}
            >
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode

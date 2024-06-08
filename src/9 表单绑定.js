import React from 'react'

class App extends React.PureComponent {

  state = {
    inputValue:''
  }
  handleClick = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  change = () => {
    this.setState({
      inputValue: 11
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onInput={this.handleClick} />
        <span> {this.state.inputValue}</span> <br />
        <button onClick={this.change}>变更inputValue</button>
      </div>
    )
  }
}

export default App;
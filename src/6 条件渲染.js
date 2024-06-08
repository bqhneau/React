import React from 'react'

class App extends React.PureComponent {

  state = {
    show: true,
    isHot:true
  }

  fn = () => {
    if (this.state.show) {
      return <span>if</span>
    } else {
      return <span>else</span>
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
      isHot:!this.state.isHot
    })
  }
  render() {
    return <div>
      <h3>条件渲染</h3>
      {/* 1、三元表达式 */}
      {this.state.show ? '显示' : '隐藏'} <br />
      {/* 2、&&  ‘true才执行’ */}
      {this.state.isHot && '天气很热'} <br />
      {/* 3、if else */}
      {this.fn()} <br />
      <button onClick={this.handleClick}>点我切换</button>
    </div>
  }
}

export default App;
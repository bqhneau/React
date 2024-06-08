import React from 'react'

class Son extends React.PureComponent{
  state = {
    data:'作用域插槽'
  }
  render() {
    return (
      <>
        {/* 2、接收 */}
        {/* (1)具名插槽 */}
        <span>接收：{this.props.children}</span> <br />
        {/* (2)作用域插槽 */}
        {this.props.slot(this.state.data)}
      </>
    )
  }
}

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {/* 1、传递 */}
        <Son slot={(slot) => <div>{ slot}</div>}>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
        </Son>
      </div>
    )
  }
}

export default App;
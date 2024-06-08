import React from 'react'
import proptypes from 'proptypes'

class Son extends React.PureComponent{
  render() {
    return (
      <>
        <h3>子组件</h3>
        {/* 2、接收 */}
        <span>接收：{this.props.mes}</span>
        <br />
        <span>接收：{this.props.color}</span>
      </>
    )
  }
}
// 1、props 类型限制
Son.propTypes = {
  // (1)手写
  mes: function (props) {
    if (typeof props.mes !== 'string') {
      throw new Error('mes 必须为字符串')
    }
  },
  // (2)使用库
  color:proptypes.number
}
// 2、props 默认值限制
Son.defaultProps = {
  mes: '默认值',
  color:'绿色'
}

class App extends React.PureComponent {

  state = {
    sonMes:'son'
  }

  render() {
    return (
      <div>
        <h2>父组件</h2>
        {/* 1、传递 */}
        <Son mes={this.state.sonMes} color={ this.state.color} />
      </div>
    )
  }
}

export default App;
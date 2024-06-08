import React from 'react'

// 1、声明context变量
let Context = React.createContext()

class GrandSon extends React.Component {
  // 指定 contextType 读取 context
  static contextType = Context;
  render() {
    return (
      <>
        <h4>孙子组件</h4>
        {/* 3、使用方 */}
        {/* (1)：consumer + 作用域插槽 */}
        <Context.Consumer>
          {(value) => <div>{ value}</div>}
        </Context.Consumer>
        {/* (2) 借助静态属性 使用 this.context 访问 */}
        <div>{this.context}</div>
      </>
    )
  }
}

class Son extends React.Component {
  render() {
    return (
      <div>
        <h3>子组件</h3>
        <GrandSon/>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    data: 'context 传递的数据'
  }
  
  render() {
    return (
      <>
        <h2>父组件</h2>
        {/* 2、传递方：provide并传递value */}
        <Context.Provider value={this.state.data}>
          <Son />
        </Context.Provider>
      </>
    )
  }
}

export default App;
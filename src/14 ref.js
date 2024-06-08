import React from 'react'

// 1、声明标识变量
let identify = React.createRef()
let son = React.createRef()

class Son extends React.Component {
  state = {
    data: 1
  }
  f1 = () => {
    console.log('调用子组件的方法');
  }
  render() {
    return (
      <div>
        <h3>子组件</h3>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    data: 1
  }
  componentDidMount() {
    // 3、获取DOM
    console.log(identify.current);
    console.log(son.current);
    son.current.f1()
  }
  render() {
    return (
      // 2、打标识
      <div ref={identify}>
        <Son ref={ son} />
      </div>
    )
  }
}

export default App;
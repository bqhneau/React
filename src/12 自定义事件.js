import React from 'react'

class Son extends React.PureComponent{
  state = {
    data:'作用域插槽'
  }
  render() {
    return (
      <>
        {/* 2、子组件调用并传递数据 */}
        <button onClick={() => {
          this.props.onActive('data')
        }}>
          点击传递
        </button>
      </>
    )
  }
}

class App extends React.PureComponent {
  // 3、父组件拿到数据
  handle = (data) => {
    console.log('接收数据',data);
  }
  render() {
    return (
      <div>
        {/* 1、父组件向子组件传递方法 */}
        <Son onActive={this.handle} />
      </div>
    )
  }
}

export default App;
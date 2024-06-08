import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  state = {
    data: 1
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={() => {
          this.setState({
            data:2
          })
        }}>
          修改
        </button>
      </div>
    )
  }
  // 挂载
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 应该更新
  shouldComponentUpdate(props,state) {
    // 优化性能
    console.log('shouldComponentUpdate');
    console.log('修改前', this.state);
    console.log('修改后', state);
    for (let item in this.state) {
      if (this.state[item] !== state[item]) {
       return true
      }
    }
    return false;
  }
  // 更新
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}

export default App;
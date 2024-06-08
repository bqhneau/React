import React from 'react'

class App extends React.PureComponent {

  // 1、声明状态
  state = {
    a: 0,
    b: 1,
    c: {
      c1: 2,
      c2: 3
    },
    arr:[1,2,3]
  }

  // 2、修改状态
  add = () => {
    this.setState({
      a: 2,
      c: {
        // 由于浅合并，深层次的修改需要先赋值一份
        ...this.state.c,
        c2:4
      }
    }, () => {
      console.log('拿到a最新的值',this.state.a);
    })
  }
  
  // 修改arr [页面不变-因为地址不变]
  addArr1 = () => {
    this.state.arr.push(4)
    this.setState({
      arr:this.state.arr
    }, () => {
      console.log(this.state.arr);
    })
  }

  // 先解除引用 再修改
  addArr = () => {
    let arr_ = [...this.state.arr]
    arr_.push(4)
    this.setState({
      arr: arr_
    }, () => {
      console.log(this.state.arr);
    })
  }
  render() {
    console.log('组件更新');
    return <div>
      <span>获取状态：</span>
      {this.state.a} <br />
      <span>c2的值：</span>
      {this.state.c.c2} <br />
      <span>修改状态：</span>
      <button onClick={this.add}>点我修改</button> <br />
      <span>PureComponent状态：</span>
      {this.state.arr} <br />
      <span>修改PureComponent状态：</span>
      <button onClick={this.addArr}>点我修改</button> <br />
    </div>
  }
}

export default App;
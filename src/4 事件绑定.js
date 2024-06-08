import React from 'react'

class App extends React.Component {

  // 声明函数时 赋值语句 + 箭头函数
  handleClick = (a,b,e) => {
    console.log('接收参数', a, b);  
    // 不传参 第一个参数
    // 传参 最后一个参数
    console.log('合成事件对象', e);
    console.log('原生事件对象', e.nativeEvent);
    e.stopPropagation();   // 阻止冒泡
    e.preventDefault();    // 阻止默认行为
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this,1,2)}>点我触发事件</button>
    )
  }
}

export default App;
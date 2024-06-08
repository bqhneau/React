import React from 'react'

function App() {
  function Fn() {
    // 1、React 创建Dom写法
    // React.createElement('标签名',[属性],'内容')
    return React.createElement('div',[],'hello,fn')
  }

  class ClassHe extends React.Component{
    constructor(props) {
      super(props)
    }
    render() {
      // 2、jsx 创建Dom写法
      return <div>hello,class</div>
    }
  }
  return (
    <div className="App">
      <Fn></Fn>
      <ClassHe></ClassHe>
    </div>
  );
}

export default App;

import React from 'react'

function App() {
  // 1、函数组件【vue3】
  function Fn() {
    return <div>fn hello</div>
  }

  // 2、类组件【vue2】
  class ClassHello extends React.Component{
    // 构造器可有可无
    constructor(props) {
      super(props)
    }
    // render必须有
    render() {
      return <div>class hello</div>
    }
  }
  return (
    <div className="App">
      <Fn></Fn>
      <ClassHello></ClassHello>
    </div>
  );
}

export default App;

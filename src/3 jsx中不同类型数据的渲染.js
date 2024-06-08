import React from 'react'

function App() {

  // 1、字符串
  const str = 'good !!!'

  // 2、数字
  const num = 123

  // 3、普通对象
  const obj = {
    a:1
  }

  // 4、element 对象
  const eleObj = <span>span</span>

  // 5、普通数组
  const arr = [1, 2, 3]
  
  // 6、elememt 数组
  const eleArr = [
    <p>1111</p>,
    <p>2222</p>,
    <p>3333</p>
  ]

  // 7、表达式
  // 如果数组的长度为3 则显示对象中的a

  // 8、方法 无法渲染

  // 9、布尔值
  const boll = false

  // 10、undefined / null;
  var ss 
  const na = null

  return (
    <div className="App">
      <span> 字符串：</span> 
      {str} <br />
      <span> 数字：</span>
      {num} <br />
      <span>普通对象：</span>
      {/* 直接取取不到，需要拿到具体的 */}
      {obj.a} <br />
      <span>元素对象：</span>
      {eleObj} <br />
      <span>普通数组：</span>
      {arr} <br />
      <span>元素数组：</span>
      {eleArr}
      <span>表达式：</span>
      {arr.length === 3 ? obj.a : ''} <br />
      <span>布尔值：</span>
      {boll} <br />
      <span>undefined:</span>
      {ss} <br />
      <span>null：</span>
      {na} <br />
    </div>
  );
}

export default App;

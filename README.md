## 1、项目搭建与结构


## 2、类组件和函数组件
```
    主要区别：
      1、函数组件没有生命周期
      2、函数组件没有this指向
      3、函数组件没有状态
      4、函数组件通过hooks实现各种操作
      5、props在函数的第一个参数接收
      6、函数体相当于类组件的render函数
```
```js

import React from 'react'

function App() {
  // 1、函数组件
  function Fn() {
    return <div>fn hello</div>
  }

  // 2、类组件
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
```

## 3、js与jsx语法
```
    1、jsx和react是相互独立的
    2、写法相似，更加简便
    3、可以和js混用
    4、最终会转化为和一个【React-element对象】
    5、不借助jsx，可以通过React.createElement创建
```
### 3.1 创建DOM的两种方式
```
    二者最终得到的内容是一致的，均是React的element对象
```
```js
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
```

### 3.2 jsx中不同类型数据的渲染.js
```
    1、字符串/数字 => 直接渲染
    2、对象(vue中当成字符串渲染)
        element对象 => 直接渲染 
        普通对象 => 取到每一项后可以渲染
    3、数组(普通/元素数组) => 把数组中的每一项进行渲染
    4、表达式 => 得到运行结果渲染
    5、方法 => 无法渲染
    6、布尔值 => 不渲染
    7、undefined/null => 不渲染
```
```js
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

```

## 4、事件绑定
```
    1、写法类似原生 on + 方法名(首字母大写)
    2、给事件赋值为某个方法,但是不要执行 
```
### 4.1 方法写在外面
```js
import React from 'react'

class App extends React.Component{

// 声明函数时 赋值语句 + 箭头函数
handleClick = ()=> {
    console.log('点击了按钮');
}
render() {
    return (
    <button onClick={this.handleClick}>点我触发事件</button>
    )
}
}

export default App;
```

### 4.2 方法写在里面
```js
import React from 'react'

class App extends React.Component{
  render() {
    return (
      <button onClick={() => {
        console.log('点击了按钮');
      }}>点我触发事件</button>
    )
  }
}

export default App;
```
### 4.3 注意事项
```
【特别注意】
    1、类组件想要拿到事件处理函数中this要处理 不然会undefined
        (1) 事件处理函数声明时，声明为【箭头函数+赋值语句】
        (2) 使用bind改变this指向，在需要传参时多用
        (3) 内联式写法，函数写为【匿名函数+箭头函数】
    2、给事件绑定的是一个方法，且不要直接调用
```
1. 事件处理函数声明时，声明为【箭头函数+赋值语句】
```js
import React from 'react'

class App extends React.Component{

// 声明函数时 赋值语句 + 箭头函数
handleClick = ()=> {
    console.log(this);  // App
}
render() {
    return (
    <button onClick={this.handleClick()}>点我触发事件</button>
    )
}
}

export default App;
```

2. 使用bind改变this指向，在需要传参时多用
```js
import React from 'react'

class App extends React.Component{
  
  // 2、使用bind在模板中改变this指向，传参时多用
  handleClick(a){
    console.log(this,a);  // App 传参
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this,'传参')}>点我触发事件</button>
    )
  }
}

export default App;
```

3. 内联式写法，函数写为【匿名函数+箭头函数】
```js
import React from 'react'

class App extends React.Component{
  
  // 3、内联 【匿名函数 + 箭头函数】
  render() {
    return (
      <button onClick={() => {
        console.log(this);  // App
      }}>点我触发事件</button>
    )
  }
}

export default App;
```

### 4.4 事件绑定其他操作
```
    1、传递参数 ：bind(this,'参数')
    2、获取事件对象 e
    3、阻止默认行为、冒泡等
```
```js
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
```

## 5、响应式数据(类组件)
```
    1、react不能像vue一样【直接修改】触发更新
    2、react直接修改能修改值,无法触发更新
    3、react没有像vue的get和set监听，借助【setState】触发更新
```
### 5.1 setState的本质
```
    1、修改数据
    2、触发更新
```
```js
    以下两种写法是等价的
    add = () => {
        this.setState({
            a:++this.state.a
        })
    }

    add = () => {
        this.state.a += 1
        this.setState({})
    }
```

### 5.2 setState 获取最新值
```
    1、setState 修改值是异步操作
    2、获取最新值要在setStete第二个参数【回调函数】中获取
```
```js
    this.setState({
        // 在这修改值
      a:++this.state.a
    }, () => {
        // 在这拿到最新的值
      console.log('拿到a最新的值',this.state.a);
    })
```

### 5.3 setState 细节
```
    1、setState传递对象，通过浅合并(Object.assign)，并非替换
    2、由于浅合并，深层次的修改需要先赋值一份
```
```js
import React from 'react'

class App extends React.Component {

  // 1、声明状态
  state = {
    a: 0,
    b: 1,
    c: {
      c1: 2,
      c2: 3
    }
  }

  // 2、修改状态
  add = () => {
    this.setState({
      a: ++this.state.a,
      c: {
        // 由于浅合并，深层次的修改需要先赋值一份
        ...this.state.c,
        c2:4
      }
    }, () => {
      console.log('拿到a最新的值',this.state.a);
    })
  }
  render() {
    return <div>
      <span>获取状态：</span>
      {this.state.a} <br />
      <span>c2的值：</span>
      {this.state.c.c2} <br />
      <span>修改状态：</span>
      <button onClick={this.add}>点我修改</button> <br />
    </div>
  }
}

export default App;
```

### 5.4 setState的一些特性
```
    1、多次修改数据，会合并为一次，最后触发更新
    2、setState每次调用都会触发更新(无论数据是否修改)
        借助 PureComponent 优化类组件
            a、数据不变，组件不刷新
            b、当修改对象和数组时，要先解除引用，否则不更新
    3、不要再render中调用setState
```
```js
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
```

## 6、条件渲染
```
    1、利用js编写自定义逻辑
    2、根据逻辑(true/false)渲染相应的内容
    3、主要方式
        (1) 三元表达式
        (2) && ||
        (3) if else
```
```js
import React from 'react'

class App extends React.PureComponent {

  state = {
    show: true,
    isHot:true
  }

  fn = () => {
    if (this.state.show) {
      return <span>if</span>
    } else {
      return <span>else</span>
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
      isHot:!this.state.isHot
    })
  }
  render() {
    return <div>
      <h3>条件渲染</h3>
      {/* 1、三元表达式 */}
      {this.state.show ? '显示' : '隐藏'} <br />
      {/* 2、&&  ‘true才执行’ */}
      {this.state.isHot && '天气很热'} <br />
      {/* 3、if else */}
      {this.fn()} <br />
      <button onClick={this.handleClick}>点我切换</button>
    </div>
  }
}

export default App;
```

## 7、列表渲染
```
    1、使用数组遍历方法 将后端返回的数组中每一项取出来渲染成jsx
        (1) 拿到原始数据：后端数据
        (2) 将每一项数据转化为DOM元素
        (3) jsx 渲染
    2、常用方法
        (1) map 有返回值
        (2) forEach 没有返回值
        (3) filter 过滤
```
```js
import React from 'react'

class App extends React.PureComponent {

  state = {
    arr: [1, 2, 3],
    eleArr: [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
    ]
  }

  getArr = () => {
    let newArr = []
    this.state.arr.forEach(item => {
      newArr.push(<p key={item}>{ item}</p>)
    })
    return newArr
  }

  render() {
    return <div>
      <h3>列表渲染</h3>
      {this.state.arr} <br />
      {this.state.eleArr}
      <hr />
      {/* 1、使用map */}
      {
        this.state.arr.map(item => (
          <h3 key={item}>{ item }</h3>
        ))
      }
      <hr />
      {/* 2、使用forEach */}
      {this.getArr()}
    </div>
  }
}

export default App;
```

## 8、样式操作
```
    1、class类名设置
        (1) 必须写成 className
        (2) 样式单独写在一个css文件中
            如果不做处理，样式会全局生效(产生样式污染)
        (3) 只能接受一个字符串 '' {}
    2、style内联写法
        不能像原生一样写成字符串''，必须写成对象 {{ }}
    3、解决样式污染
        (1) 改名 将 .css => .module.css
        (2) 将样式文件引入为对象 import sonStyle from ''
        (3)【sonStyle.son】/【sonStyle['son']】取出类名使用
    4、动态控制类名
        引入状态，根据状态使用条件渲染出切换类名(拼接字符串)
        (1) 手动拼接字符串(少量)
        (2) 借助 classnames 拼接
            a、帮助我们生成计算好的类名的字符串
```
### 8.1 手动拼接字符串
```js
import React from 'react'
import './App.css'

class App extends React.PureComponent {

  state = {
    isShow : true
  }
  
  handle = () => {
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    return (
      <div className="App">
        {/* 手动拼接 */}
        <span className={ this.state.isShow ? 'color' :''}> 动态添加类名</span> <br />
        <button onClick={this.handle}>点我切换</button>
      </div>
    )
  }
}

export default App;
```

### 8.2 借助 classnames 拼接
```js
import React from 'react'
import classnames from'classnames'
import style from'./App.module.css'

class App extends React.PureComponent {

  state = {
    isShow : true
  }
  
  handle = () => {
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    return (
      <div className={style.App}>
        {/* 借助classnames拼接 */}
          <span className={classnames({
            {/* 不需要改变this指向 */}
            [style['color']]:this.state.isShow
          })}> 动态添加类名</span> <br />
          <button onClick={this.handle}>点我切换</button>
      </div>
    )
  }
}

export default App;
```

## 9、受控组件和非受控组件
```
  回想原生：
    1、获取表单的值   onInput={this.handleClick}
      a、绑定监听事件 input/change
      b、通过【e.target.value】获取
    2、设置表单的值   value={this.state.inputValue}
      设置value/checke属性
```
```js
import React from 'react'

class App extends React.PureComponent {

  state = {
    inputValue:''
  }
  handleClick = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  change = () => {
    this.setState({
      inputValue: 11
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onInput={this.handleClick} />
        <span> {this.state.inputValue}</span> <br />
        <button onClick={this.change}>变更inputValue</button>
      </div>
    )
  }
}

export default App;
```

### 9.1 受控组件(双向的)
```
    1、表单的值可以获取【state】，并可以由开发者靠代码【setState】去更改
    2、可以通过设置state中的值改变表单中的值
    3、将表单数据添加到state中，可以通过【state/setState】对数据进行获取和修改
```

### 9.2 受控组件(无状态的)
```
    1、表单的值我们只能获取【通过给输入框打标识获取】
    2、我们仅做了事件监听，没有设置 value/checked 属性
    3、没有设置 state
```

### 9.3 关于复选框
```
    1、 value  选中后的值
    2、checked 控制是否选中
```

## 10、组件通信(父=>子)

### 10.1 基本使用
```
    1、传递方式与函数组件一致
    2、接收时通过 this.props.mes 获取
```
```js
import React from 'react'
class Son extends React.PureComponent{
  render() {
    return (
      <>
        <h3>子组件</h3>
        {/* 2、接收 */}
        <span>接收：{this.props.mes}</span>
      </>
    )
  }
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
        <Son mes={ this.state.sonMes} />
      </div>
    )
  }
}
export default App;
```

### 10.2 类型限制
```
  1、手写验证方法
  2、借助 proptypes 库
```
```js
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
```

## 11、插槽
```
    传递html元素，借助【props.children】获取
      1、传递：写在子组件内容区域
      2、接收: this.props.children
```

### 11.1 具名插槽
```js
import React from 'react'

class Son extends React.PureComponent{
  render() {
    return (
      <>
        {/* 2、接收 */}
        <span>接收：{this.props.children}</span>
      </>
    )
  }
}

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {/* 1、传递 */}
        <Son>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
        </Son>
      </div>
    )
  }
}

export default App;
```

### 11.2 作用域插槽
```
    1、父组件传递函数，函数返回值为html元素
    2、子组件调用时，传递数据，渲染jsx
```
```js
import React from 'react'

class Son extends React.PureComponent{
  state = {
    data:'作用域插槽'
  }
  render() {
    return (
      <>
        {/* 2、接收 */}
        {/* 作用域插槽 */}
        {this.props.slot(this.state.data)}
      </>
    )
  }
}

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {/* 1、传递 */}
        <Son slot={(slot) => <div>{ slot}</div>}></Son>
      </div>
    )
  }
}

export default App;
```

## 12、组件通信(子=>父)
```
  1、父组件向子组件传递方法
  2、子组件调用并传递数据
  3、父组件拿到数据
```
```js
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
```

## 13、生命周期
### 13.1 生命周期介绍
```
    0、渲染 render
        初次渲染 更新时执行
    1、挂载 componentDidMount
        (1)数据请求
        (2)echart绘制  
    2、更新
        shouldComponentUpdate(是否更新) 
            性能优化 PureComponent
        componentDidUpdate
    3、卸载 componentDidUnmount
        销毁定时器
```

### 13.2 更新原理
```
    1、vue 
        (1)使用了【get】依赖收集，把受当前数据影响的部分收集起来
        (2)数据变动时使用【set】触发更新
    2、react
        (1)使用useState触发更新，无论数据是否改变
        (2)有性能问题
```

## 14、ref
```
    1、用于获取DOM节点或者组件实例
    2、获取组件时，只能获取类组件，函数组件没有实例
    3、在挂载阶段获取ref
```

### 14.1 React.createref()
```js
import React from 'react'

// 1、声明标识变量
let identify = React.createRef()
let son = React.createRef()

class Son extends React.Component {
  f1 = () => {
    console.log('调用子组件的方法');
  }
  render() {
    return <div>子组件</div>
  }
}

class App extends React.Component {
  componentDidMount() {
    // 3、获取DOM
    console.log(identify.current);
    console.log(son.current);
    son.current.f1()
  }
  render() {
    return (
      // 2、打标识
      <div ref={identify}><Son ref={son}/></div>
    )
  }
}
export default App;
```

### 14.2 回调函数写法
```
		ref={(c)=>{this.input1=c}}
      1、c 实际上为当前DOM实例
      2、将 c 挂载到this上
      3、并取名为 input1
      4、这样便可以通过this.input1 拿到该 DOM
```
```js
class Demo extends React.Component{
			//展示左侧输入框的数据
			showData = ()=>{
				const {input1} = this
				alert(input1.value)
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				const {input2} = this
				alert(input2.value)
			}
			render(){
				return(
					<div>
						<input ref={(a)=>{this.input1=a}} type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input onBlur={this.showData2} ref={c => this.input2 = c } type="text" placeholder="失去焦点提示数据"/>&nbsp;
					</div>
				)
			}
		}
```

## 15、context(类似于provide和inject)
```
    适用于跨级组件通信
    1、声明公用的context组件
    2、传递方：provide
    3、接收方：
      (1) consumer组件 + 作用域插槽
      (2) 静态属性contextType + this.context
```
```js
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
```

## 16、hooks

### 16.1 useState
```
    1、让函数组件也可以有state状态, 并进行状态数据的读写操作
    2、【语法】: 
      const [xxx, setXxx] = React.useState(initValue)  
    3、useState()说明:
      【参数】: 第一次初始化指定的值在内部作缓存
      【返回值】: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
    4、setXxx()2种写法:
      setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
      setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

### 16.2 useEffect
```
  1、在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
  2、React中的副作用操作:
      发ajax请求数据获取
      设置订阅 / 启动定时器
      手动更改真实DOM
  3、语法和说明: 
      useEffect(() => { 
        // update/mount
        return () => { // 在组件卸载前执行
          // 在此做一些收尾工作, 比如清除定时器/取消订阅等
        }
      }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
  4、可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount() 
  5、第二个参数填写依赖项 类似于【vue的监听】
```

### 16.3 useMemo
```
    1、用于优化函数组件性能，缓存【数据】，避免不必要的计算
    2、相当于 vue 的【计算属性】
    3、根据依赖项决定是否重新计算
```

### 16.4 useCallback
```
    1、用于优化函数组件性能，缓存【函数】，避免不必要的计算
    2、相当于 vue 的【计算属性】
    3、根据依赖项决定是否重新计算
```

### 16.5 useRef

```
    0、与【createRef】类似，只是声明标识变量的方式不同
    1、用来获取DOM阶段
    2、用来获取之前的数据
    3、用来获取组件及组件身上的方法
```

### 16.6 useContext
```js
    1、创建context方式不变
      const Context = React.createContext()
    2、【使用方】useContext 直接接收值
      let value = useContext(Context)
```

## 17、高阶组件 Hoc (类似于vue中混入)
```
    【用途】提取公用逻辑，实现复用
```

## 18、组件性能优化
```
    1、问题：父组件的更新会连带子组件一起更新
    2、解决：diff算法 + 时间切片(部分更新，部分渲染)
      (1) 将任务分为许多个执行单元
      (2) 有时间 ？ 接着运行执行单元 ：交给浏览器更新
    3、引入fiber数据结构
      为了支持切片，引入此数据结构
      (1) 支持组件切片
      (2) 具有继续执行的能力(恢复上次进度)
    4、我们能做的
      (1) PureComponment
          避免state修改为同样的值，触发更新
      (2) Memo 结合 useMemo 、useCallback
          包裹对象、数组、方法 避免子组件更新
```

## 19、组件库
```
    Ant Design
      1、Button
      2、Table 插槽
      3、定制主题 ConfigProvider
```
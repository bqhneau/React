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
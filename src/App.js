import React from 'react'

class App extends React.PureComponent {

  state = {
    inputValue: '',
    checkedArr:['1','3']
  }
  handleClick = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  
  change = (e) => {
    let Arr = [...this.state.checkedArr]
    if (e.target.checked) {
      Arr.push(e.target.value)
    } else {
      let index = Arr.indexOf(e.target.value)
      Arr.splice(index,1)
    }
    // setState 写到最后 统一更新
    this.setState({
      checkedArr: Arr
    })
  }
  render() {
    return (
      <div>
        <span>复选框：</span>
        <input
          value={'1'}
          type='checkbox'
          name='check'
          onChange={this.change}
          checked={this.state.checkedArr.indexOf('1') !== -1}
        /> 选项一
        <input
          value={'2'}
          type='checkbox'
          name='check'
          onChange={this.change}
          checked={this.state.checkedArr.indexOf('2') !== -1}
        /> 选项二
        <input
          value={'3'}
          type='checkbox'
          name='check'
          onChange={this.change}
          checked={this.state.checkedArr.indexOf('3') !== -1}
        /> 选项三
        <br />
        <span>当前勾选的值：</span>
        <span> {this.state.checkedArr}</span> <br />
      </div>
    )
  }
}

export default App;
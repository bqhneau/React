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
            [style['color']]:this.state.isShow
          })}> 动态添加类名</span> <br />
          <button onClick={this.handle}>点我切换</button>
      </div>
    )
  }
}

export default App;
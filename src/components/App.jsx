import React , { Component } from 'react';
import Header from './Header'
import Home from './Home'
import ITPosts from './ITPosts'
import Think from './Think'

class App extends Component {
  render() {
    let styles = {
       appStyle: {
       display: 'flex',
       flex: '1',
       flexDirection: 'column'
      }
    }
    return(
      <div style={styles.appStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App

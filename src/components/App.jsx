import React , { Component } from 'react';
import Header from './Header'

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

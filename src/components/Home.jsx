import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

let styles = {
  webStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00bcd4',
    alignItems: 'center',
    flexShrink: 0
  }
}


const Home = () => (
  <div style={styles.webStyle}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton href="./web前端个人简历.pdf" label="点击下载我的简历" secondary={true} linkButton={true} />
    </MuiThemeProvider>
  </div>
);

export default Home;

import React, { Component } from 'react'
import { Drawer, AppBar, MenuItem} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Link } from 'react-router'

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class Header extends Component  {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
      let styles = {
        headerStyle: {
          display: 'flex'
        },
        linkStyle: {
          textDecoration: 'none'
        },
        appBarStyle: {
          display: 'flex',
          alignItems: 'center'
        }
      }
      return (
          <div style={styles.headerStyle}>
            <Drawer
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>
              <Link to="/home" style={styles.linkStyle}>
                <MenuItem onTouchTap={this.handleClose}>首页</MenuItem>
              </Link>
              <Link to="/web" style={styles.linkStyle}>
                <MenuItem onTouchTap={this.handleClose}>Web相关技术</MenuItem>
              </Link>
              <Link to="/think" style={styles.linkStyle}>
                <MenuItem onTouchTap={this.handleClose}>随笔</MenuItem>
              </Link>
            </Drawer>
            <AppBar title="Night Eagle's Pages"
              isInitiallyOpen={true}
              onLeftIconButtonTouchTap={this.handleToggle}
              onLeftIconButtonClick={this.handleToggle}
              style={styles.appBarStyle}>
                <RaisedButton
                  label="My Github"
                  secondary={true}
                  linkButton={true}
                  href="./myblog.html" />
            </AppBar>
          </div>
      );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Header;

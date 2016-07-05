import React from 'react';

let styles = {
  webStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0f9d58',
    alignItems: 'center',
    flexShrink: 0
  },
  mainStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '920px',
    flexShrink: 0,
    flexWrap: 'wrap'
  },
  papersStyle: {
    width: '250px',
    height: '250px',
    display: 'flex',
    flexShrink: 0,
    margin: '30px 0',
    backgroundColor: '#ffffff'
  },
  logoStyle: {
    width: '100%',
    height: 'auto'
  }
}
const Web = () => (
  <div style={styles.webStyle}>
    <div style={styles.mainStyle} className="papers">
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427352" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/react-logo.png" />
      </a>
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427358" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/nodejs-logo.png" />
      </a>
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427362" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/gulp-logo.png" />
      </a>
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427355" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/webpack-logo.png" />
      </a>
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427366" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/js-logo.png" />
      </a>
      <a style={styles.papersStyle} href="https://www.zybuluo.com/kungfuboy/note/427368" target="view_window">
        <img style={styles.logoStyle} src="../asset/images/github-logo.png" />
      </a>
    </div>
  </div>
);

export default Web;

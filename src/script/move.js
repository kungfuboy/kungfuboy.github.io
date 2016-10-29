function sidebarMove() {
  var t = document.getElementsByClassName('mobile-sidebar')[0];
  console.log(t);
  var p = parseFloat(t.style.left) || t.offsetLeft;
  var f = (p == 0) ? true : false;
  console.log(f);
  setInterval(function(){
      if(f && p > -300) {
        p = p - 10;
        t.style.left = p + 'px';
        // console.log('+' + p);
      } else if(!f && p < 0) {
        p = p + 10;
        t.style.left = p + "px";
        // console.log('-' + p);
      }
  },1);
  clearInterval();
}

function sideMenuMove() {
  var t = document.getElementsByClassName('pc-menu')[0];
  var c = document.getElementsByClassName('main-content')[0];
  console.log(t);
  var p = parseFloat(t.style.left) || t.offsetLeft;
  if(p > -100) {
    // p = p - 10;
    t.style.left = '-200px';
    c.style.marginLeft = '0px';
    // console.log('+' + p);
  } else {
    // p = p + 10;
    t.style.left = "0px";
    c.style.marginLeft = '200px';
    // console.log('-' + p);
  }
}

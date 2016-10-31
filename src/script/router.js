function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();




function changeBg(color, id, m_id) {
  // change backgroundColor of header and menu color
  document.querySelector('header').style.backgroundColor = color;

  var w = document.body.clientWidth;
  if(w < 750) {
    // mobile
    Array.prototype.map.call(
      document.getElementsByClassName("mobile-menu")[0].children, function(n) {
        n.setAttribute('class', '');
    });
    document.getElementById(m_id).setAttribute('class', m_id);

  } else {
    // pc
    Array.prototype.map.call(
      document.getElementsByClassName("pc-menu")[0].children, function(n) {
        n.setAttribute('class', '');
    });
    document.getElementById(id).setAttribute('class', id);
  }
}

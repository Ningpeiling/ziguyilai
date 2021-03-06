// Generated by CoffeeScript 1.6.3
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var demos, logo, methods;
    if (!OriDomi.isSupported) {
      document.getElementById('unsupported').style.display = 'block';
      return;
    }
    logo = new OriDomi('.logo', {
      shading: false,
      speed: 1000
    });
    logo.stairs(89);
    demos = [
      new OriDomi('.demo1', {
        vPanels: 5,
        ripple: true
      }), new OriDomi('.demo2', {
        maxAngle: 89,
        ripple: true
      }), new OriDomi('.demo3', {
        vPanels: 8,
        ripple: true
      }), new OriDomi('.demo4', {
        vPanels: 4,
        ripple: true
      }), new OriDomi('.demo5', {
        hPanels: 4,
        ripple: true
      }), new OriDomi('.demo6', {
        hPanels: 4,
        ripple: true,
        shading: false
      })
    ];
    setTimeout(function() {
      demos[0].accordion(30);
      demos[1].reveal(40);
      demos[2].accordion(-20, 'left');
      demos[3].stairs(18, 'right');
      demos[4].reveal(30, 'top');
      return demos[5].stairs(20, 'bottom');
    }, 1000);
    methods = ['accordion', 'curl', 'foldUp', 'reveal', 'fracture', 'ramp', 'stairs', 'twist'];
    return document.getElementById('demos').addEventListener('click', function(e) {
      var angle, el, method, n;
      if ((el = e.target).className !== 'button') {
        return;
      }
      n = el.getAttribute('data-n');
      method = methods[Math.floor(Math.random() * methods.length)];
      angle = Math.floor(Math.random() * 80 * (Math.random() > .5 ? -1 : 1));
      demos[n][method](method !== 'foldUp' ? angle : void 0);
      if (method === 'foldUp') {
        angle = '';
      }
      return el.parentNode.getElementsByClassName('label')[0].innerHTML = "" + method + "(" + angle + ")";
    }, false);
  });

}).call(this);

/*
//@ sourceMappingURL=demo.map
*/

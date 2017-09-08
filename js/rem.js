(function(doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' :
      'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        //此设置是根据psd为320宽度下设置1rem=20px来设置的
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      };
    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
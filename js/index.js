(function () {
    var startY, isMove,  moveY, currentIndex = 0;
    var animate = ['bounce', 'swing', 'wobble', 'fadeInLeftBig', 'pulse']
    var page = document.querySelector('.page');
    var pageUl = document.querySelector('.pageUl');
    var pageList = document.querySelectorAll('.pageUl li');
    var clientHeight = document.body.clientHeight;
    _initPage();
    function _initPage() {
        page.addEventListener('touchstart', _start);
        page.addEventListener('touchmove', _move);
        page.addEventListener('touchend', _end);
    }
    function _start(e) {
        if (e.type == "touchstart") {
            startY = event.touches[0].pageY;
        } else {
            startY = e.y || e.pageY;
        }
        isMove = true;
    }
    function _move(e) {
        var currentY;
        if (isMove) {
            if (e.type == "touchmove") {
                currentY = event.touches[0].pageY;
                moveY = startY - currentY;
            } else {
                currentY = e.y || e.pageY;
                moveY = startY - currentY;
            }
        }
    }
    function _end() {
        if (Math.abs(moveY) > 70) { //移动距离大于70
            if(moveY > 0) {
                currentIndex++;
            } else {
                currentIndex--;
            }
            _initAnimate()
        }
    }
    function _initAnimate() {
        pageUl.style.top = (currentIndex % pageList.length) * -clientHeight + 'px'; 
        var last = moveY > 0 ? currentIndex - 1 : currentIndex + 1
        Array.prototype.forEach.call(pageList[last].children, function(element, index) {
            element.setAttribute('class', '')
        });
        Array.prototype.forEach.call(pageList[currentIndex].children, function(element, index) {
            element.setAttribute('class', 'animated '+animate[index])
        });
    }
})()
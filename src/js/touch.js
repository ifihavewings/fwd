var touchPara = {};
window.onscroll= function() {
    /*
    页面具有 DTD，或者说指定了 DOCTYPE 时，使用 document.documentElement。
    页面不具有 DTD，或者说没有指定了 DOCTYPE，时，使用 document.body。
    在 IE 和 Firefox 中均是如此。
    为了兼容，不管有没有 DTD，可以使用如下代码：
    var scrollTop = window.pageYOffset  //用于FF
                    || document.documentElement.scrollTop  
                    || document.body.scrollTop  
                    || 0;
    */
    var clientHeight = document.documentElement.scrollTop === 0 ? document.documentElement.clientHeight : document.body.clientHeight;
    // 这句不大靠谱
    // var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    var scrollTop =  window.pageYOffset  || document.documentElement.scrollTop  || document.body.scrollTop  || 0;
    var scrollHeight = document.documentElement.scrollTop === 0 ? document.documentElement.scrollHeight : document.body.scrollHeight;
    console.log('clientHeight-----------' + clientHeight);
    console.log('scrollTop-----------' + scrollTop);
    console.log('scrollHeight-----------' + scrollHeight);
    if (clientHeight + scrollTop === scrollHeight) {
        // alert('btm');
        // ajaxGetNextPage();
    //    console.log(1);
    //    console.log(huaDong());
        var data = huaDong();
        console.log(touchPara);
    }
};
function huaDong () {
    var body = document.getElementsByTagName('body')[0];
    body.addEventListener("touchstart", function(e) {
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
        // e.preventDefault();
        touchPara.startX = e.targetTouches[0].pageX,
        touchPara.startY = e.targetTouches[0].pageY;
    },false);
    body.addEventListener("touchmove", function(e) {
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
        // e.preventDefault();
        touchPara.moveEndX = e.targetTouches[0].pageX,
        touchPara.moveEndY = e.targetTouches[0].pageY,
        X = touchPara.moveEndX - touchPara.startX,
        Y = touchPara.moveEndY - touchPara.startY;
          
        if ( Math.abs(X) > Math.abs(Y) /*&& Math.abs(X)> 100*/ &&  X > 0 ) {
        //  alert("left 2 right");
         touchPara.direction = 'right';
        }
        else if ( Math.abs(X) > Math.abs(Y) /*&& Math.abs(X)> 100*/ && X < 0 ) {
        //  alert("right 2 left");
         touchPara.direction = 'left';
        }
        else if ( Math.abs(Y) > Math.abs(X) /*&& Math.abs(Y)> 100*/ && Y > 0) {
        //  alert("top 2 bottom");
         touchPara.direction = 'bottom';
        }
        else if ( Math.abs(Y) > Math.abs(X) /*&& Math.abs(Y)> 100*/ && Y < 0 ) {
        //  alert("bottom 2 top");
         touchPara.direction = 'top';
        }
        else{
        //  alert("just touch");
         touchPara.direction = 'none';
        }
    },false);
    body.addEventListener("touchend", function(e) {
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
        // e.preventDefault();
        touchPara.endX = e.changedTouches[0].clientX,
        touchPara.endY = e.changedTouches[0].clientY,
        X = touchPara.endX - touchPara.startX,
        Y = touchPara.endY - touchPara.startY;
          
        if ( Math.abs(X) > Math.abs(Y) /*&& Math.abs(X)> 100*/ &&  X > 0 ) {
        //  alert("left 2 right");
         touchPara.direction = 'right';
        }
        else if ( Math.abs(X) > Math.abs(Y) /*&& Math.abs(X)> 100*/ && X < 0 ) {
        //  alert("right 2 left");
         touchPara.direction = 'left';
        }
        else if ( Math.abs(Y) > Math.abs(X) /*&& Math.abs(Y)> 100*/ && Y > 0) {
        //  alert("top 2 bottom");
         touchPara.direction = 'bottom';
        }
        else if ( Math.abs(Y) > Math.abs(X) /*&& Math.abs(Y)> 100*/ && Y < 0 ) {
        //  alert("bottom 2 top");
         touchPara.direction = 'top';
        }
        else{
        //  alert("just touch");
         touchPara.direction = 'none';
        }
    },false);
}
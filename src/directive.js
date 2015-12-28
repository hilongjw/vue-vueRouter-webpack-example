var vuetap = {
    // https://github.com/MeCKodo/vue-tap
    isFn: true,
    acceptStatement: true,
    bind: function() {
        //bind callback
    },
    update: function(fn) {
        var self = this;
        self.tapObj = {};

        if (typeof fn !== 'function') {
            return console.error('The param of directive "v-tap" must be a function!');
        }
        self.handler = function(e) { //This directive.handler
            e.tapObj = self.tapObj;
            fn.call(self, e);
        };
        if (self.isPC()) {
            self.el.addEventListener('click', function(e) {
                fn.call(self, e);
            }, false);
        } else {
            this.el.addEventListener('touchstart', function(e) {
                if (self.modifiers.prevent)
                    e.preventDefault();
                if (self.modifiers.stop)
                    e.stopPropagation();
                self.touchstart(e, self);
            }, false);
            this.el.addEventListener('touchend', function(e) {
                self.touchend(e, self, fn);
            }, false);
        }
    },
    unbind: function() {},
    isTap: function() {
        var tapObj = this.tapObj;
        return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
    },
    isPC: function() {
        var uaInfo = navigator.userAgent;
        var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var i = 0; i < agents.length; i++) {
            if (uaInfo.indexOf(agents[i]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    touchstart: function(e, self) {
        var touches = e.touches[0];
        var tapObj = self.tapObj;
        tapObj.pageX = touches.pageX;
        tapObj.pageY = touches.pageY;
        tapObj.clientX = touches.clientX;
        tapObj.clientY = touches.clientY;
        self.time = +new Date();
    },
    touchend: function(e, self) {
        var touches = e.changedTouches[0];
        var tapObj = self.tapObj;
        self.time = +new Date() - self.time;
        tapObj.distanceX = tapObj.pageX - touches.pageX;
        tapObj.distanceY = tapObj.pageY - touches.pageY;

        if (self.isTap(tapObj))
            self.handler(e);
    }
}

exports.tap = vuetap;

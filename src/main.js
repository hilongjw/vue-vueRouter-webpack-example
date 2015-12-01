var Vue = require('vue')
var VueRouter = require('vue-router')
var VueAsyncData = require('vue-async-data')
var App = require('./app.vue')

Vue.use(VueRouter);
Vue.use(VueAsyncData);

Vue.config.debug = true;

var router = new VueRouter()

router.map({
        '/': {
            component: require('./components/index.vue')
        },
        '/list': {
            component: require('./components/list.vue')
        },
        '/asi': {
            component: require('./components/asi.vue')
        }
    })

router.start(App, 'app')

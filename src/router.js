module.exports = function(router){
	router.map({
		'*': {
            component: require('./components/index.vue')
        },
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
	
}
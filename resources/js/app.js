
require('./bootstrap');
window.Vue = require('vue').default;

// router
import router from './routes.js';
window.router = router;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    data: {
        firststring: 'firststring'
    },
    components: {
    }
});

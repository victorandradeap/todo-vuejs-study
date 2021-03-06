import Vue from 'vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import App from './App';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});

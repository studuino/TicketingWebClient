// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.css'
import * as firebase from 'firebase'
import {store} from './store'
import AlertComponent from './components/utils/Alert';
import {sync} from 'vuex-router-sync'
import VueApexCharts from 'vue-apexcharts'
import SettingsComponent from './components/settings/Settings'
import AddUser from './components/users/AddUser'
import AddAdminstrator from './components/users/admin/AddAdminstrator'
import Statistic from './components/utils/Statistic'
import _env from './env'

Vue.use(Vuetify, { theme: {
  primary: '#5F9EA0',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  primarydark:'#23283a',
  colorBlue:'#5F9EA0'
}});
Vue.use(VueApexCharts);
Vue.config.productionTip = false;
Vue.component('app-alert',AlertComponent);
Vue.component('settings-view',SettingsComponent);
Vue.component('add-user',AddUser);
Vue.component('add-admin',AddAdminstrator);
Vue.component('mini-statistic',Statistic);

sync(store,router);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: _env.apiKey,
      authDomain: _env.authDomain,
      databaseURL: _env.databaseURL,
      projectId: _env.projectId,
      storageBucket: _env.storageBucket,
      messagingSenderId: _env.messagingSenderId
    });

    if(this.$store.state.token !==null && this.$store.state.token !==undefined){
      this.$router.push('/home-dash');

    }
  }

});

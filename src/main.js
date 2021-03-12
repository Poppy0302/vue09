import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import "firebase/firestore";
if(!firebase.app.length){
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCJ2aLWG3KgOsXykP_R7E_iylv5lH8z1ec",
      authDomain: "vue09-ff26a.firebaseapp.com",
      projectId: "vue09-ff26a",
      storageBucket: "vue09-ff26a.appspot.com",
      messagingSenderId: "237426182963",
      appId: "1:237426182963:web:90a5f0debc5adf25c2cc46",
      
    };
    firebase.initializeApp(firebaseConfig);
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");
}
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


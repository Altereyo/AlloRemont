import './public/sass/global.sass';
import './public/sass/header.sass';
import './public/sass/main.sass';
import './public/sass/footer.sass';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
import Vue from 'vue';
import app from './public/app.vue';

new Vue({
  el: '#app',
  render: h => h(app),
})
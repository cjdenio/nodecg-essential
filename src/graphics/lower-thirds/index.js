import Vue from 'vue';
import Index from './index.vue';

new Vue({
  render: e => e(Index),
}).$mount('#app');

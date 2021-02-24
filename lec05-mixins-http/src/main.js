import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false;

Vue.use(ElementUI,  { locale });

Vue.directive('highlight', function (el, binding) {
  // console.log('binding', binding)
  el.style.backgroundColor = binding.value;
});

// Vue.directive('event', function (el, binding) {
//   console.log('event', el, binding,)
// });

new Vue({
  render: h => h(App),
}).$mount('#app')

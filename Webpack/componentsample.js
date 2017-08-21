var ComponentSample = require('./comsam.vue')

// root インスタンスを作成する
new Vue({
  el: '#example',
  components: ComponentSample,
  template: '<component-sample>'
});
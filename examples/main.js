import Vue from "vue";
import App from "./App.vue";
import BbUI from "../packages";

Vue.config.productionTip = false;
Vue.use(BbUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

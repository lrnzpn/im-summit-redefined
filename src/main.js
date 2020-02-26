import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/global.scss";

// jquery
import JQuery from "jquery";
window.$ = JQuery;

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// vee-validate
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("en", en);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

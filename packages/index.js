// 整个包的入口
import BbButton from "./button.vue";
import BbDialog from "./dialog.vue";
import BbInput from "./input.vue";
import BbSwitch from "./switch.vue";
import BbRadio from "./radio.vue";
import BbRadioGroup from "./radio-group.vue";
import BbCheckbox from "./checkbox.vue";
import BbCheckboxGroup from "./checkbox-group.vue";
import BbForm from "./form.vue";
import BbFormItem from "./form-item.vue";
import "./fonts/iconfont.css";

const components = [
  BbButton,
  BbDialog,
  BbInput,
  BbSwitch,
  BbRadio,
  BbRadioGroup,
  BbCheckbox,
  BbCheckboxGroup,
  BbForm,
  BbFormItem,
];

// 定义install方法，接受Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // console.log(123);
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};

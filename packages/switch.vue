<template>
  <div class="bb-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <span class="bb-switch_core" ref="core">
      <span class="bb-switch_button"></span>
    </span>
    <input class="bb-switch_input" type="checkbox" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "bb-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$nextTick(() => {
        this.setColor();
        this.$refs.input.checked = this.value;
      });
    },
    setColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        console.log(color);
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted() {
    this.setColor();
    this.$refs.input.checked = this.value;
  }
};
</script>

<style lang="scss" scoped>
.bb-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .bb-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .bb-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .bb-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .bb-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.bb-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>

<template>
  <div class="bb-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bb-radio-group",
  props: {
    // provide 与 inject
    value: null
  },
  provide() {
    return {
      RadioGroup: this
    };
  }
};
</script>

<style></style>

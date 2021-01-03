<template>
  <div class="bb-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bb-checkbox-group",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  }
};
</script>

<style></style>

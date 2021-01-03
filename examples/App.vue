<template>
  <div id="app">
    <bb-form :model="model" label-width="100px">
      <bb-form-item label="用户名">
        <bb-input placeholder="请输入用户名" v-model="model.username" />
      </bb-form-item>
      <bb-form-item label="选择">
        <bb-switch v-model="model.active"></bb-switch>
      </bb-form-item>
    </bb-form>

    <!-- <bb-checkbox v-model="active">是否选中</bb-checkbox>
    <bb-checkbox-group v-model="hobby">
      <bb-checkbox label="抽烟"></bb-checkbox>
      <bb-checkbox label="喝酒"></bb-checkbox>
      <bb-checkbox label="烫头"></bb-checkbox>
    </bb-checkbox-group> -->
    <!-- <bb-radio-group v-model="gender">
      <bb-radio label="1">男</bb-radio>
      <bb-radio label="0">女</bb-radio>
    </bb-radio-group> -->
    <!-- <bb-radio label="1" v-model="gender">男</bb-radio>
    <bb-radio label="0" v-model="gender">女</bb-radio> -->
    <!-- <bb-switch v-model="active" name="switchName"></bb-switch>
    <bb-switch
      v-model="active"
      active-color="red"
      inactive-color="green"
    ></bb-switch> -->
    <!-- <div :style="{ width: '180px' }">
      <bb-input
        placeholder="请输入用户名"
        name="username"
        v-model="username"
        clearable
      ></bb-input>
      <bb-input
        placeholder="请输入用户名"
        name="username"
        v-model="username"
        type="password"
        show-password
      ></bb-input>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "123",
      active: false,
      switchName: "test",
      gender: "1",
      hobby: ["抽烟", "喝酒", "烫头"],
      model: {
        username: "",
        active: true,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

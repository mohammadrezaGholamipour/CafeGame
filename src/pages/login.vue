<script setup>
import { reactive } from "vue";

const state = reactive({
  lgoinInput: [
    { placeholder: "نام کاربری", type: "text", value: "" },
    { placeholder: "رمز عبور", type: "password", value: "" },
  ],
});
</script>
<template>
  <div class="ParentLogin">
    <div class="login">
      <img class="LoginLogo" src="../assets/image/logo.png" alt="لوگو" />
      <input
        v-for="items in state.lgoinInput"
        :placeholder="items.placeholder"
        v-model="items.value"
        class="LoginInput"
        :type="items.type"
      />
      <button class="lgoinBtn">وارد شدن</button>
    </div>
  </div>
</template>
<style scoped></style>

<script setup>
import { reactive } from "vue";
////////////////////////////
const state = reactive({
  loginInput: [
    {
      placeholder: "نام کاربری",
      name: "userName",
      validate: false,
      type: "text",
      message: "",
      value: "",
    },
    {
      placeholder: "رمز عبور",
      name: "passWord",
      type: "password",
      validate: false,
      message: "",
      value: "",
    },
  ],
});
//////////////////////////////////////
const handleValidateInput = (name) => {
  const input = state.loginInput.filter((items) => items.name === name);
  if (input[0].value.length > 0) {
    if (input[0].name === "userName") {
      if (isNaN(input[0].value)) {
        if (input[0].value.length > 5) {
          input[0].validate = true;
        } else {
          input[0].validate = false;
          input[0].message = "باید بیشتر از 5 رقم باشد";
        }
      } else {
        input[0].validate = false;
        input[0].message = "نام کاربری نامعتبر میباشد";
      }
    } else {
      if (input[0].value.length > 5) {
        input[0].validate = true;
      } else {
        input[0].validate = false;
        input[0].message = "باید بیشتر از 5 رقم باشد";
      }
    }
  } else {
    input[0].message = "";
  }
  //////////////////////////////////////
};
</script>
<template>
  <div class="ParentLogin">
    <div class="login">
      <img class="LoginLogo" src="../assets/image/logo.png" alt="لوگو" />
      <template v-for="items in state.loginInput">
        <input
          @blur="handleValidateInput(items.name)"
          :placeholder="items.placeholder"
          v-model="items.value"
          class="LoginInput"
          :type="items.type"
          maxlength="10"
        />
        <transition-expand>
          <p
            class="mt-2 bg-red-700 px-7 p-2 rounded-lg text-white"
            v-if="items.message"
          >
            {{ items.message }}
          </p>
        </transition-expand>
      </template>
      <button @click="handleLogin" class="loginBtn">وارد شدن</button>
    </div>
  </div>
</template>

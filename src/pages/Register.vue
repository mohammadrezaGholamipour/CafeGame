<script setup>
import { useToast } from "vue-toastification";
import { reactive } from "vue";
////////////////////////////
const toast = useToast();
const state = reactive({
  registerInput: [
    {
      placeholder: "نام",
      validate: false,
      name: "Name",
      type: "text",
      message: "",
      value: "",
    },
    {
      placeholder: "نام خانوادگی",
      name: "LastName",
      validate: false,
      type: "text",
      message: "",
      value: "",
    },
    {
      placeholder: "نام کاربری",
      name: "UserName",
      validate: false,
      type: "text",
      message: "",
      value: "",
    },
    {
      placeholder: "شماره تلفن همراه",
      validate: false,
      name: "Mobile",
      type: "text",
      message: "",
      value: "",
    },
    {
      placeholder: "رمز عبور",
      name: "PassWord",
      validate: false,
      type: "password",
      message: "",
      value: "",
    },
    {
      placeholder: "تکرار رمز عبور",
      name: "PassWord",
      validate: false,
      type: "password",
      message: "",
      value: "",
    },
  ],
});
</script>
<template>
  <div class="ParentRegister">
    <div class="Register">
      <img class="Logo" src="../assets/image/logo.png" alt="لوگو" />
      <div class="ParentInputRegister">
        <template v-for="items in state.registerInput">
          <input
            :placeholder="items.placeholder"
            class="RegisterInput"
            v-model="items.value"
            :type="items.type"
            maxlength="15"
          />
          <transition-expand>
            <p
              class="mt-2 bg-red-700 opacity-80 border-red-800 border-2 px-7 p-2 rounded-md text-white"
              v-if="items.message"
            >
              {{ items.message }}
            </p>
          </transition-expand>
        </template>
        <button class="RegisterBtn">ثبت نام</button>
      </div>
    </div>
  </div>
</template>

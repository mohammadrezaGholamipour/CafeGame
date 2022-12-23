<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import { useToast } from "vue-toastification";
import { reactive } from "vue";
import * as yup from "yup";
////////////////////////////
const toast = useToast();
const state = reactive({
  registerInput: [
    {
      placeholder: "نام",
      name: "name",
      type: "text",
      rules: yup
        .string()
        .required("نام خود را وارد کنید")
        .min(3, "کوتاه میباشد"),
      value: "",
    },
    {
      placeholder: "نام خانوادگی",
      name: "lastName",
      type: "text",
      rules: yup
        .string()
        .required("نام خانوادگی خود را وارد کنید")
        .min(3, "صحیح نمیباشد"),
      value: "",
    },
    {
      placeholder: "نام کاربری",
      name: "userName",
      type: "text",
      rules: yup
        .string()
        .required("نام کاربری خود را وارد کنید")
        .min(8, "حداقل 8 کاراکتر"),
      value: "",
    },
    {
      placeholder: "شماره تلفن همراه",
      name: "mobile",
      type: "text",
      rules: yup
        .string()
        .required("تلفن همراه خود را وارد کنید")
        .min(11, "شماره تلفن صحیح نمیباشد")
        .max(11, "شماره تلفن صحیح نمیباشد"),
      value: "",
    },
    {
      placeholder: "رمز عبور",
      name: "password",
      type: "password",
      rules: yup
        .string()
        .required("رمز خود را وارد کنید")
        .min(4, "حداقل چهار کاراکتر باید باشد"),
      value: "",
    },
    {
      placeholder: "تکرار رمز عبور",
      name: "repeatPassword",
      type: "password",
      rules: yup
        .string()
        .required("رمز خود را تکرار کنید")
        .min(4, "حداقل چهار کاراکتر باید باشد"),
      value: "",
    },
  ],
});
const handelRegisterFrom = () => {
  console.log("fsdfsd");
};
</script>
<template>
  <div class="ParentRegister">
    <div class="Register">
      <img class="Logo" src="../assets/image/logo.png" alt="لوگو" />
      <div class="ParentInputRegister">
        <!-- <template v-for="items in state.registerInput">
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
        </template> -->
        <Form @submit.pervent="handelRegisterFrom" class="flex flex-col">
          <template v-for="items in state.registerInput" :key="items.name">
            <Field
              :placeholder="items.placeholder"
              :validateOnBlur="false"
              class="RegisterInput"
              :rules="items.rules"
              :name="items.name"
              :type="items.type"
            />
            <transition-expand>
              <ErrorMessage class="ErrorMessage" :name="items.name" />
            </transition-expand>
          </template>
          <!-- //////////////////////// -->
          <div class="w-full flex justify-center items-center">
            <button class="RegisterBtn">ثبت نام</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

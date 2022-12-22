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
  schema: yup.object({
    email: yup.string().required("ایمیل").email(),
    name: yup.string().required("نام"),
    password: yup.string().required("پسورد").min(8),
  }),
});
const passwordRules = yup.string().required("کمه").min(8);
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
        <Form class="flex flex-col" :validation-schema="state.schema">
          <Field  class="RegisterInput" name="name" type="text" />
          <ErrorMessage name="name" />
          <!-- ////////////////////// -->
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <!-- ///////////////////// -->
          <Field name="email" />
          <ErrorMessage name="email" />
          <!-- //////////////////////// -->
          <button class="RegisterBtn">ثبت نام</button>
        </Form>
      </div>
    </div>
  </div>
</template>

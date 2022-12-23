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
      value: "",
    },
    {
      placeholder: "نام خانوادگی",
      name: "lastName",
      type: "text",
      value: "",
    },
    {
      placeholder: "نام کاربری",
      name: "userName",
      type: "text",
      value: "",
    },
    {
      placeholder: "شماره تلفن همراه",
      name: "mobile",
      type: "text",
      value: "",
    },
    {
      placeholder: "رمز عبور",
      name: "password",
      type: "password",
      value: "",
    },
    {
      placeholder: "تکرار رمز عبور",
      name: "repeatPassword",
      type: "password",
      value: "",
    },
  ],
  schema: yup.object({
    name: yup.string().required("نام خود را وارد کنید").min(3, "صحیح نمیباشد"),
    lastName: yup
      .string()
      .required("نام خانوادگی خود را وارد کنید")
      .min(3, "صحیح نمیباشد"),
    password: yup.string().email("ایمیل صحیح نمیباشد"),
    userName: yup
      .string()
      .required("نام کاربری خود را وارد کنید")
      .min(8, "حداقل 8 کاراکتر"),
    mobile: yup
      .string()
      .required("تلفن همراه خود را وارد کنید")
      .min(11, "شماره تلفن صحیح نمیباشد")
      .max(11, "شماره تلفن صحیح نمیباشد"),
    password: yup
      .string()
      .required("رمز خود را وارد کنید")
      .min(4, "حداقل چهار کاراکتر باید باشد"),
    repeatPassword: yup
      .string()
      .required("رمز خود را تکرار کنید")
      .min(4, "حداقل چهار کاراکتر باید باشد"),
  }),
});
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
          <template v-for="items in state.registerInput" :key="items.name">
            <Field
              :placeholder="items.placeholder"
              :validateOnBlur="false"
              class="RegisterInput"
              :name="items.name"
              :type="items.type"
            />
            <ErrorMessage class="ErrorMessage" :name="items.name" />
          </template>
          <!-- //////////////////////// -->
          <button class="RegisterBtn">ثبت نام</button>
        </Form>
      </div>
    </div>
  </div>
</template>

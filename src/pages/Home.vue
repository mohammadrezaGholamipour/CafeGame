<script setup>
import { reactive } from "vue";

const state = reactive({
  listPs4: [
    {
      id: 1,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 2,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 3,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 4,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 5,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 6,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 7,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
    {
      id: 8,
      time: {
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      inputmoney: 56546446,
      money: "صفر",
      status: false,
    },
  ],
});
const handleStatusPs4 = (index) => {
  state.listPs4[index].status = !state.listPs4[index].status;
  if (state.listPs4[index].status) {
    handleTimer(index);
  } else {
    state.listPs4[index].time.hours = "00";
    state.listPs4[index].time.minutes = "00";
    state.listPs4[index].time.seconds = "00";
    state.listPs4[index].money = "صفر";
  }
};
const handleTimer = (index) => {
  setInterval(() => {
    state.listPs4[index].time.seconds++;
    if (state.listPs4[index].time.seconds == 60) {
      state.listPs4[index].time.seconds = "00";
      state.listPs4[index].time.minutes++;
    }
  }, 1000);
};
</script>
<template>
  <div class="ParentHome">
    <div class="ParentHeader">
      <img src="../assets/image/LogoHome.png" width="150" alt="Playstation" />
    </div>
    <div class="ParentMain">
      <div
        v-for="(items, index) in state.listPs4"
        :key="index"
        class="ConsolePs4"
      >
        <p class="NumberPs4">{{ items.id }}</p>
        <p class="TimerPs4">
          {{
            `${items.time.hours}:${items.time.minutes}:${items.time.seconds}`
          }}
        </p>

        <select
          class="appearance-none cursor-pointer block px-3 py-1.5 text-white outline-none bg-red-500 rounded transition ease-in-out m-0"
          v-model="items.inputmoney"
        >
          <option value="1">12,000</option>
          <option value="2">15,000</option>
          <option value="3">20,000</option>
        </select>
        <p class="MoneyPs4">{{ items.money }}</p>
        <button
          :class="items.status ? 'bg-red-500' : 'bg-green-500'"
          @click="handleStatusPs4(index)"
          class="BtnPs4"
        >
          {{ items.status ? "پایان" : "شروع" }}
        </button>
      </div>
    </div>
  </div>
</template>

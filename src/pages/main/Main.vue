<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { Ref } from "vue";

const myChoice: Ref<string | null> = ref(null);
const comChoice: Ref<string | null> = ref(null);
const count: Ref<number> = ref(3);
const winner: Ref<string | null> = ref(null);
const lifeOfMe: Ref<number> = ref(3);
const lifeOfCom: Ref<number> = ref(3);
const isSelectable: Ref<boolean> = ref(true);

interface Log {
  message: string | null;
  winner: string | null;
}
const logs: Log[] = reactive([]);
const selects = reactive([
  { name: "가위", value: "scissor" },
  { name: "바위", value: "rock" },
  { name: "보", value: "paper" },
]);

const myChoiceImg = computed(() => {
  return myChoice.value !== null
    ? `/src/assets/images/${myChoice.value}.jpg`
    : "/src/assets/images/question.jpg";
});
const comChoiceImg = computed(() => {
  return comChoice.value !== null
    ? `/src/assets/images/${comChoice.value}.jpg`
    : "/src/assets/images/question.jpg";
});
const leftLifeOfMe = computed(() => {
  return 3 - lifeOfMe.value;
});
const leftLifeOfCom = computed(() => {
  return 3 - lifeOfCom.value;
});

watch(
  () => count.value,
  (newVal) => {
    if (newVal === 0) {
      // 컴퓨터가 가위바위보를 선택하는
      selectCom();

      // 가위바위보 승패 결정 & 몫을 차감
      whoIsWin();

      // 게임 리셋
      count.value = 3;
      isSelectable.value = true;

      // 로그를 업데이트 하는 부분
      updateLogs();
    }
  }
);

watch(lifeOfMe, async (newVal) => {
  if (newVal === 0) {
    // 게임을 종료
    endGame("안타깝네요. 당신이 패배하였습니다.");
  }
});

watch(lifeOfCom, async (newVal) => {
  if (newVal === 0) {
    endGame("축하드립니다. 당신이 승리하였습니다.");
  }
});

function startGame() {
  // 버튼이 보이지 않음
  isSelectable.value = false;
  if (myChoice === null) {
    alert("가위 바위 보 중 하나를 선택해주세요.");
    isSelectable.value = true;
  } else {
    let countDown = setInterval(() => {
      count.value--;
      if (count.value === 0) {
        clearInterval(countDown);
      }
    }, 1000);
  }
}
function selectCom() {
  let number = Math.random();
  if (number < 0.33) {
    comChoice.value = "scissor";
  } else if (number < 0.66) {
    comChoice.value = "rock";
  } else {
    comChoice.value = "paper";
  }
}
function whoIsWin() {
  if (myChoice.value === comChoice.value) winner.value = "no one";
  else if (myChoice.value === "rock" && comChoice.value === "scissor")
    winner.value = "me";
  else if (myChoice.value === "scissor" && comChoice.value === "paper")
    winner.value = "me";
  else if (myChoice.value === "paper" && comChoice.value === "rock")
    winner.value = "me";
  else if (myChoice.value === "scissor" && comChoice.value === "rock")
    winner.value = "com";
  else if (myChoice.value === "paper" && comChoice.value === "scissor")
    winner.value = "com";
  else if (myChoice.value === "rock" && comChoice.value === "paper")
    winner.value = "com";
  else winner.value = "error";

  // 몫 차감
  if (winner.value === "me") {
    lifeOfCom.value--;
  } else if (winner.value === "com") {
    lifeOfMe.value--;
  }
}
function updateLogs() {
  let log: Log = {
    message: `You: ${myChoice.value}, Computer: ${comChoice.value}`,
    winner: winner.value,
  };

  logs.unshift(log);
}

function endGame(msg: string) {
  setTimeout(() => {
    confirm(msg);
    lifeOfMe.value = 3;
    lifeOfCom.value = 3;
    myChoice.value = null;
    comChoice.value = null;
    winner.value = null;
    logs.length = 0; // logs 변수 초기화 []
  }, 500);
}
</script>
<template>
  <div class="row">
    <div class="small-5 columns text-center">
      <img :src="myChoiceImg" alt="" class="text-center" />
      <h1 class="text-center"><strong>YOU</strong></h1>
    </div>
    <div class="small-2 columns text-center">
      <h1 style="font-size: 100px">
        <strong>{{ count }}</strong>
      </h1>
    </div>
    <div class="small-5 columns text-center">
      <img :src="comChoiceImg" alt="" class="text-center" />
      <h1 class="text-center"><strong>Computer</strong></h1>
    </div>
  </div>

  <div class="row">
    <div class="small-6 columns text-center">
      <div class="battle-wrap">
        <img
          v-for="life in lifeOfMe"
          :key="'me_live_' + life"
          src="/src/assets/images/heart.jpg"
          class="heart"
          alt=""
        />
        <img
          v-for="life in leftLifeOfMe"
          :key="'me_broken_' + life"
          src="/src/assets/images/broken-heart.jpg"
          class="heart"
          alt=""
        />
      </div>
    </div>
    <div class="small-6 columns text-center">
      <div class="battle-wrap">
        <img
          v-for="life in lifeOfCom"
          :key="'come_live_' + life"
          src="/src/assets/images/heart.jpg"
          class="heart"
          alt=""
        />
        <img
          v-for="life in leftLifeOfCom"
          :key="'com_broken_' + life"
          src="/src/assets/images/broken-heart.jpg"
          class="heart"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="row">
    <div class="small-6 columns text-center">
      <div class="row">
        <div class="small-8 small-offset-2 columns text-center">
          <label v-for="select in selects" class="radio-label">
            <input type="radio" v-model="myChoice" :value="select.value" />
            {{ select.name }}
          </label>
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <div class="text-center" v-if="isSelectable">
            <button class="start-btn" @click="startGame()">선택 완료!</button>
          </div>
          <div v-else class="loading">기다리는 중...</div>
        </div>
      </div>
    </div>
    <div class="small-6 columns text-center">
      <p>생각 중...</p>
    </div>
  </div>

  <div class="row">
    <div class="small-12 columns log">
      <ul>
        <li
          :class="{
            'win-log': log.winner === 'me',
            'defeat-log': log.winner === 'com',
            'draw-log': log.winner === 'no one',
          }"
          v-for="log in logs"
        >
          {{ log.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@import "~/assets/css/app.css";
@import "~/assets/css/foundation.min.css";
</style>

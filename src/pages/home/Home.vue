<script setup lang="ts">
import { onMounted } from "vue";
import HelloWorld from "~/components/HelloWorld.vue";
import { fetchData } from "~/services/sample.service";

onMounted(() => {
  console.log(6, "on mounted");
  fetchData().then((res) => {
    console.log(9, res);
  });
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <router-link to="sample"> sample</router-link>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style>
@import "~/assets/css/style.css";
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

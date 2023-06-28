import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupStore } from "~/store";
import { router } from "~/router";
import axiosPlugin from "~/plugins/axios";

const app = createApp(App);

setupStore(app);

app.use(router);
app.use(axiosPlugin);

// env variable get
console.log(import.meta.env.VITE_APP_TEST_KEY);

app.mount("#app");

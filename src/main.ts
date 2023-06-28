import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupStore } from "~/store";
import { router } from "~/router";

const app = createApp(App);

setupStore(app);
app.use(router);

app.mount("#app");

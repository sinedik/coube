import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
app.config.productionTip = false;
app.mount("#app");

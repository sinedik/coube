import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import "./assets/scss/main.scss";

const app = createApp(App);
const pinia = createPinia();

// Используем плагин i18n через app.use
app.use(pinia);
app.use(i18n);

// Инициализация языка после создания хранилища
import { useLangStore } from "./stores/langStore";
const langStore = useLangStore();
langStore.initLang();

app.mount("#app");

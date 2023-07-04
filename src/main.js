import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "it",
  messages: {
    en: require("./locales/en.json"),
    fr: require("./locales/fr.json"),
    it: require("./locales/it.json"),
    ci: require("./locales/ci.json"),
    de: require("./locales/de.json"),
  },
});

const app = createApp(App);

app.use(i18n);

app.mount("#app");

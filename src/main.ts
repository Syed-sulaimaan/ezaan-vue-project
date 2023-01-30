import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiTwitterLine,
} from "oh-vue-icons/icons";

import "./assets/main.css";

addIcons(RiLinkedinLine, RiInstagramLine, RiTwitterLine);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#main");

import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueApexCharts from "vue3-apexcharts";
import VueTablerIcons from "vue-tabler-icons";
import "@/assets/scss/style.scss";

import { ORANGE_THEME } from "@/theme/LightTheme";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "ORANGE_THEME",
      themes: {
        ORANGE_THEME,
      },
    },
    defaults: {
      VBtn: {},
      VCard: {
        rounded: "md",
      },
      VTextField: {
        rounded: "lg",
      },
      VTooltip: {
        // set v-tooltip default location to top
        location: "top",
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueApexCharts);
  nuxtApp.vueApp.use(VueTablerIcons);
});

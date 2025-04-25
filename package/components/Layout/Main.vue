<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from "vue";
import sidebarItems from "@/components/Layout/Full/vertical-sidebar/sidebarItem";
import { Icon } from "@iconify/vue";
// Icon Imports
import { Menu2Icon, BellRingingIcon } from "vue-tabler-icons";
import { LayoutFullVerticalHeaderNotificationDD } from "#components";
import { useDisplay } from "vuetify";
const sidebarMenu = shallowRef(sidebarItems);
const { mdAndDown } = useDisplay();
const sDrawer = ref(true);
onMounted(() => {
  sDrawer.value = !mdAndDown.value; // hide on mobile, show on desktop
});
watch(mdAndDown, (val) => {
  sDrawer.value = !val;
});
</script>

<template>
  <v-navigation-drawer
    left
    v-model="sDrawer"
    app
    class="leftSidebar bg-containerBg"
    width="270"
  >
    <div class="px-6 py-5">
      <LayoutFullLogo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar bg-containerBg overflow-y-hidden">
      <v-list class="px-6">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu">
          <!---Item Sub Header -->
          <LayoutFullVerticalSidebarNavGroup
            :item="item"
            v-if="item.header"
            :key="item.title"
          />
          <!---If Has Child -->
          <LayoutFullVerticalSidebarNavCollapse
            class="leftPadding"
            :item="item"
            :level="0"
            v-else-if="item.children"
          />
          <!---Single Item-->
          <LayoutFullVerticalSidebarNavItem
            :item="item"
            v-else
            class="leftPadding"
          />
          <!---End Single Item-->
        </template>
        <!-- <Moreoption/> -->
      </v-list>
      <div class="pa-4">
        <div class="bg-lightsecondary pa-6 rounded-md position-relative">
          <div class="position-relative z-1">
            <h5 class="text-h5 font-weight-semibold">Check Pro</h5>
            <h5 class="text-h5 font-weight-semibold">Version</h5>
            <v-btn
              color="secondary"
              flat
              class="mt-3"
              href="https://www.wrappixel.com/templates/flexy-nuxt-js-vuetify-admin-template/?ref=376#demos"
              target="_blank"
              >check</v-btn
            >
          </div>
          <img
            src="/images/background/sidebar-buynow.png"
            alt="upgrade"
            class="position-absolute rtlImg top-0 mt-n6 right-0"
          />
        </div>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>

  <!------Header-------->
  <v-app-bar elevation="0" height="70" class=" top-header px-4">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="hidden-lg-and-up text-muted"
          @click="sDrawer = !sDrawer"
          icon
          variant="flat"
          height="40" width="40" rounded="pill"
        >
          <Icon icon="solar:hamburger-menu-outline" height="22"></Icon>
        </v-btn>
        <!-- Notification -->
        <LayoutFullVerticalHeaderNotificationDD />
      </div>
      <div>
        <!-- Upgrade button -->
        <v-btn
          class="me-3 bg-secondary"
          href="https://www.wrappixel.com/templates/flexy-nuxt-js-vuetify-admin-template/?ref=376#demos"
          target="_blank"
          >Check Pro Template</v-btn
        >
        <!-- User Profile -->
        <LayoutFullVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import ProductCards from "~/components/dashboards/ProductCards.vue";
import ProductPerformance from "~/components/dashboards/ProductPerformance.vue";
import RecentTransaction from "~/components/dashboards/RecentTransaction.vue";
import SalesOverview from "~/components/dashboards/SalesOverview.vue";
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <SalesOverview />
        </v-col>
        <v-col cols="12" lg="4">
          <RecentTransaction />
        </v-col>
        <v-col cols="12" lg="8">
          <ProductPerformance />
        </v-col>
        <v-col cols="12">
          <ProductCards />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    class:String
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item class="pa-6">
            <div class="d-sm-flex align-center justify-space-between">
                <h5 class="card-title mb-6 ">{{ title }}</h5>
                <!-- <template v-slot:append> -->
                <slot name="action"></slot>
                <!-- </template> -->
            </div>

            <slot />
        </v-card-item>
       
    </v-card>
</template>

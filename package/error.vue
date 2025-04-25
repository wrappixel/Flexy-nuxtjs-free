<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>
<template>
    <div class="d-flex h-screen justify-center align-center text-center h-100">
        <div>
            <img src="/images/background/errorimg.svg" width="500" alt="404" />
            <h1 class="text-h1 pt-3">Opps!!!</h1>
            <h4 class="text-h4 my-8">This page you are looking for could not be found.</h4>
            <v-btn  color="primary" class="mb-4" flat to="/">Go Back to Home</v-btn>
        </div>
    </div>
</template>

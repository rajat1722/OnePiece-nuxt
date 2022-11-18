<template>
    <div>
        <img :src="products.image" alt="">
        <p class="font-bold text-gray-500 m-4 truncate">
            {{ products.title }}
        </p>
        <NuxtLink to="/">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['products'])
</script>

<style scoped>

</style>
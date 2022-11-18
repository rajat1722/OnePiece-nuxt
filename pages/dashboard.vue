<template>
    <div class="container mx-auto p-5">
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in products" :key="item.id">
                <ProductCard :products="item"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const { data: products } = await useFetch("https://fakestoreapi.com/products")
</script>

<style scoped>

</style>
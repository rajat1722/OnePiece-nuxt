<template>
    <div>
        <header class="shadow-sm bg-white text-2xl border-b-2">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class=" text-3xl text-blue-900">One Piece</NuxtLink>
                <ul class="flex gap-9">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/notes">Notes</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        
        <div>
            <slot/>
        </div>

        <footer class="text-3xl fixed bottom-0 left-0 right-0 mx-auto flex justify-center p-5 border-t-2 bg-white">
            <p class="text-center w-full">@CopyRight Rajat Rana</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

    .router-link-exact-active {
        color:#12b488;
    }
</style>
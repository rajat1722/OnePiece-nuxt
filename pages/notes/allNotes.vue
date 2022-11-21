<template>
    <div class="container mx-auto p-4 flex text-2xl gap-9 truncate">
        <div v-for="note, index in noteStore.notes" :key="index" class="card p-4 w-[30%] ">
            <h2>Title: <span class=" text-blue-400">{{ note.title }}</span></h2>
            <p class="truncate">Content: <span class=" text-blue-400">{{ note.content }}</span></p>
            <NuxtLink :to="`./${index}`" class="btn my-4 inline-block" :note="note">Full Note</NuxtLink>
        </div>


    </div>
</template>

<script setup lang="ts">
import {useNoteStore} from "@/stores/NoteStore"
definePageMeta({
        middleware: ["check-notes"]
})
const noteStore = useNoteStore()

</script>

<style scoped>

</style>
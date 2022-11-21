<template>
    <div class="container mx-auto">

        <div class="card w-[50%] mx-auto my-9 p-4 overflow-auto">
            <h1 class="text-2xl"><span class=" text-blue-400">Title: </span> {{title}}</h1>
            <p class="text-2xl"><span class=" text-blue-400">Content:</span> {{content}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useNoteStore } from '~~/stores/NoteStore'
    // const note = defineProps<{title: string, content: string}>()

    const noteStore = useNoteStore()
    const { id } = useRoute().params
    const title = noteStore.notes[Number(id)].title
    const content = noteStore.notes[Number(id)].content
</script>

<style scoped>

</style>
<template>
    <div class="container mx-auto flex items-center gap-9">
        <div class="justify-center">
            <h1 class="text-4xl my-5">Save a note </h1>
            <form @submit.prevent="saveNote()">
                <input id="subject" class="text-2xl border-2 border-black mb-4 p-2" type="text" placeholder="Subject" v-model="subject" required>
                <br>
                <textarea class="text-2xl border-2 border-black p-2" placeholder="Content" id="content" cols="30" rows="10" v-model="content" required></textarea>
                <br>
                <button class="text-2xl btn my-4">Save</button>
            </form>
        </div>
        <NuxtLink to="/notes/allNotes" class="btn text-2xl cursor-pointer">See all notes</NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import {useNoteStore} from "@/stores/NoteStore"

    const noteStore = useNoteStore()
    const subject = ref<string>("")
    const content = ref<string>("")

    
    function saveNote(){
        // console.log(subject.value, content.value)
        noteStore.addNote(subject.value, content.value)
        subject.value = ""
        content.value = ""
    }
</script>

<style scoped>

</style>
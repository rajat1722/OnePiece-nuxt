import { useNoteStore } from "~~/stores/NoteStore"
export default defineNuxtRouteMiddleware((to, from) => {
    const noteStore = useNoteStore()
    if(noteStore.notes.length === 0){
        return navigateTo(from)
    }
})
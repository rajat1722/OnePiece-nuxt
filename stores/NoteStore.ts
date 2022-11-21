import { Store } from "pinia";

export const useNoteStore = defineStore('notes', ()=> {
    type Note = {
        title: string,
        content: string,
    }
    const notes = ref<Note[]>([])
    
    function addNote(title:string, content:string): void{
        notes.value.push({
            "title": title,
            "content": content
        })
    }
    
    return {notes, addNote}
})
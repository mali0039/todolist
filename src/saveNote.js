import {noteFactory} from "./noteFactory.js"
import {storeNote} from "./storeNotes.js"
import {sortNotesByPriority} from './sortNotes.js'
let saveNote = document.querySelector("#save-note");
saveNote.addEventListener('click', function() {
    let noteDescription = document.querySelector("#note-description");
    let notePriority = document.querySelector("#notePriority");
    let notedueDate = document.querySelector("#due-date");
    let note = noteFactory(noteDescription.value, notedueDate.value, notePriority.value);
    if (notePriority.value == "Medium") {
        console.log("HI!");
        note = noteFactory(noteDescription.value, notedueDate.value, "Med");
    }
    storeNote(note);
    sortNotesByPriority();
    noteDescription.value = "";
    notePriority.value = "Default select";
});

export {saveNote}
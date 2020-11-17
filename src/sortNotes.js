import {emptyNotes} from './initializeNotes.js'
import {mainCategory} from './index.js'
import {noteToHTML} from './noteToHtml.js'
import {setColors} from './setPriorityColors.js'
import {currentCategory} from './index.js'
let sortNotesByPriority = function() {
    notes.innerHTML = emptyNotes;
    currentCategory.sort((a,b) => {
        if (a.priority == "High") {
            return -1;
        }
        else if (b.priority == "High") {
            return 1;
        }
        else if (a.priority == "Med") {
            return -1;
        }
        else if (b.priority == "Med") {
            return 1;
        }
        else {
            return -1;
        }
    })
    currentCategory.forEach(element =>  {
        notes.innerHTML += noteToHTML(element);        
       
    });
    setColors();
}
export {sortNotesByPriority}
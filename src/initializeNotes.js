import { currentCategory } from "./index.js";

let notes = document.querySelector("#notes");
let emptyNotes = `<div id="add"><i class="fas fa-plus-circle" data-toggle="modal" data-target="#addCategory"></i></div>
<h4>Priority</h4>
<h4>Due Date</h4>
<h2 id="note-heading">Notes</h2>

`;
notes.innerHTML = emptyNotes;
export {notes, emptyNotes}
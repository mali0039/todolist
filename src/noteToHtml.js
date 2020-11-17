let noteToHTML = function(note) {
    let noteHTML = 
    `<div class="note">
    <p class="notePriority"><i class="fa fa-circle small-circle" aria-hidden="true"></i>
    ${note.priority}</p>
    <p class="noteDueDate">${note.dueDate} </p>
    <p><i class="far fa-circle"></i>${note.description}</p>
    </div>`;
    return noteHTML;
}
export {noteToHTML}